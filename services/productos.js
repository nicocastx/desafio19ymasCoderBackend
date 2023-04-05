import ProductosRepo from "../persistence/repos/ProdsRepo.js"
//import db from '../persistence/productos.js'

const db = new ProductosRepo()

async function listarProductos(){
  return await db.getProductos()
}

async function guardarProducto(obj){
  obj.fecha = new Date().toLocaleString()
  db.guardarProducto(obj)
}

export default{
  listarProductos,
  guardarProducto
}