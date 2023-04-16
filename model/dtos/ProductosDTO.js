class ProductoDTO{
  constructor({id, nombre, url, precio,fecha}){
    this.id = id
    this.nombre = nombre
    this.url = url
    this.precio = precio
    this.fecha = fecha
  }
}

export default function formatDTO(productos){
  if(Array.isArray(productos)){
    return productos.map(obj => new ProductoDTO(obj))
  } else{
    return new ProductoDTO(productos)
  }
}
