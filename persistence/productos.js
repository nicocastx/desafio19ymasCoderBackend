import {prodModel} from './models/producto.js'
import { contenedorMDB } from "./ContenedorMDB.js";

const cProds = new contenedorMDB(prodModel)

async function getProductos(){
  return await cProds.getAll()
}

async function guardarProducto(obj){
  return await cProds.save(obj)
}

export default{
  getProductos,
  guardarProducto
}
