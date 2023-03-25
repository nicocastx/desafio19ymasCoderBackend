import {msjModel} from './models/mensajes.js'
import { contenedorMDB } from "./ContenedorMDB.js";

const cMsj = new contenedorMDB(msjModel)

async function getMensajes(){
  return await cMsj.getAll()
}

async function guardarMensaje(msj){
  return await cMsj.save(msj)
}


export default{
  getMensajes,
  guardarMensaje
}
