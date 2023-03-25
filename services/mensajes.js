import db from "../persistence/mensajes.js";
import { normalize, schema } from "normalizr";

async function listarTodos() {
  return await db.getMensajes();
}

async function guardarMensaje(msj){
  return await db.guardarMensaje(msj)
}

async function mensajesNormalizados() {
  //#region esquemas de normalizr
const schAuthor = new schema.Entity("author", {}, { idAttribute: "mail" });

const schMsj = new schema.Entity(
  "mensaje",
  {
    author: schAuthor,
  },
  { idAttribute: "id" }
);

const schMsjs = new schema.Entity("mensajes", {
  mensajes: [schMsj],
});

//#endregion esquemas de normalizr

  const mensajes = await db.getMensajes()

  const msjsNotNorm = {
    id: "1",
    mensajes: mensajes.map((msj) => {
      return { ...msj._doc, id: msj._id.toString() };
    }),
  };

  const normMsjs = normalize(msjsNotNorm, schMsjs)

  return normMsjs
}

export default {
  listarTodos,
  mensajesNormalizados,
  guardarMensaje
};
