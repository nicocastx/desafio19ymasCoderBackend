//express
import express from "express";


import registerRouter from "./routes/register.js";
import productosRouter from "./routes/productos.js";
import testRouter from "./routes/tests.js";

import handlebars from "express-handlebars";

import dotenv from "dotenv";

//session
import session from "express-session";
import passport from "passport";
import MongoStore from "connect-mongo";

import { conexionMDB } from "./optionsmdb.js";

//socket y http
import { createServer } from "http";
import { Server } from "socket.io";

//services
import prodService from "./services/productos.js";
import msjService from "./services/mensajes.js";

//logger
import loggerInfo from "./routes/middlewares/loggerInfo.js";
import logger from "./logger.js";

import cluster from "cluster";
import os from "os";

import parseArgs from 'yargs/yargs'

conexionMDB;

//importacion de manejo de dirname
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

dotenv.config({ path: __dirname + "/.env" });

//declaracion de variables
const advOptionsMongo = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const numCPUs = os.cpus().length;
const yargs = parseArgs(process.argv.slice(2))
const { PORT, MODO } = yargs
  .alias({
    p: "PORT",
    m: "MODO",
  })
  .default({
    PORT: process.env.PORT || 8080,
    MODO: "fork",
  }).argv;


//#region ConfigApp
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.static("./public"));
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: process.env.DBSESSION,
      mongoOptions: advOptionsMongo,
      ttl: 60,
      autoRemove: "native",
    }),
    cookie: {
      maxAge: 10 * 60 * 1000,
    },
    secret:
      //"secreto",
      process.env.SECRETSESSION,
    resave: false,
    saveUninitialized: false,
  })
);

app.engine("handlebars", handlebars.engine());

app.set("views", "./views");
app.set("view engine", "handlebars");

//inicio de passport en app
app.use(passport.initialize());
app.use(passport.session());

//#endregion ConfigApp

//#region Socket
io.on("connection", async (socket) => {
  logger.info("Nuevo Cliente conectado");

  socket.emit("productos", await prodService.listarProductos());

  socket.on("newProd", async (newProd) => {
    await prodService.guardarProducto(newProd);
    io.sockets.emit("productos", await prodService.listarProductos());
  });

  socket.emit("mensajes", await msjService.mensajesNormalizados());

  socket.on("newMsj", async (nuevoMsj) => {
    await msjService.guardarMensaje(nuevoMsj);
    const msjsNorm = await msjService.mensajesNormalizados();
    io.sockets.emit("mensajes", msjsNorm);
  });
});
//#endregion Socket

if (MODO === "cluster" && cluster.isPrimary) {
  logger.info(numCPUs);
  logger.info(`Maestro ejecutado con el ID: ${process.pid}`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    logger.info(
      `Worker ${worker.process.pid} died: ${new Date().toLocaleString()}`
    );
  });
} else {
  logger.info(`El proceso worker se inicio en ${process.pid}`);
  app.use("/user", loggerInfo.loggerInfo, registerRouter);

  app.use("/", loggerInfo.loggerInfo, productosRouter);

  app.use("/test", loggerInfo.loggerInfo, testRouter);

  app.get("*", (req, res) => {
    const { url, method } = req;

    logger.warn(`ruta ${url} metodo ${method} no implementado`);
    res.json({ error: "La ruta y metodo solicitado no existen" });
  });

  httpServer.listen(PORT, () => {
    console.log(`Escuchando en ${PORT}`);
  });
}
