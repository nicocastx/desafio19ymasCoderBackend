import ProductosRepo from "../model/repos/ProdsRepo.js"
//import db from '../persistence/productos.js'

const db = new ProductosRepo()

async function listarProductos(){
  return await db.getProductos()
}

async function guardarProducto(obj){
  obj.fecha = new Date().toLocaleString()
  db.guardarProducto(obj)
}

async function modificarProducto(newObj, id){
  newObj.fecha = new Date().toLocaleString()
  db.modProducto(newObj, id)
}

async function eliminarProducto(id){
  db.borrarProductos(id)
}

export default{
  listarProductos,
  guardarProducto,
  modificarProducto,
  eliminarProducto
}