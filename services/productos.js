import ProductosRepo from "../persistence/repos/ProdsRepo.js"
//import db from '../persistence/productos.js'

const db = new ProductosRepo()

try {
  console.log(await db.getProductos());
} catch (error) {
  
}

async function listarProductos(){
  console.log(await db.getProductos());
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