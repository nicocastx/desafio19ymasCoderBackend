import service from '../services/tests.js'
//importacion de manejo de dirname
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

async function getTestProductos(req, res){
  const prodTest = await service.crearProductosTest(5)

  res.render('prodTest', prodTest)
}

async function getInfo(req, res){
  const infoTest = await service.getInfo()
  res.render('info', infoTest)
}

async function randoms(req, res){
  let {cant} = req.query
  if (!cant) {
    cant = 100000;
  }
  const contadorFork = fork(__dirname + "/utils/contador.js");
    contadorFork.on("message", (result) => {
      if (result == "listo") {
        contadorFork.send(cant);
      } else {
        res.render("randoms", {
          randomObj: JSON.stringify(result),
        });
      }
    })


}

export default {
  getTestProductos,
  randoms,
  getInfo
}