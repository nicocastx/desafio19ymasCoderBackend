import ProductosRepo from "../model/repos/ProdsRepo.js"
//import db from '../persistence/productos.js'

const db = new ProductosRepo()

async function listarProductos(){
  //devuelve una lista de productos
  return await db.getProductos()
}

async function guardarProducto(obj){
  obj.fecha = new Date().toLocaleString()
  const newProd = await db.guardarProducto(obj)
  //devuelve el objeto guardado
  return newProd
}

async function modificarProducto(newObj, id){
  newObj.fecha = new Date().toLocaleString()
  //devuelve el producto con las modificaciones
  return db.modProducto(newObj, id)
}

async function eliminarProducto(id){
  //devuelve el producto eliminado
  return db.borrarProductos(id)
}

export default{
  listarProductos,
  guardarProducto,
  modificarProducto,
  eliminarProducto
}
