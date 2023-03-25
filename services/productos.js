import db from '../persistence/productos.js'

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