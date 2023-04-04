class ProductoDTO{
  constructor({id, nombre, url, precio}){
    this.id = id
    this.nombre = nombre
    this.url = url
    this.precio = precio
  }
}

export default function formatDTO(productos){
  if(Array.isArray(productos)){
    return productos.map(obj => new ProductoDTO(obj))
  } else{
    return new ProductoDTO(productos)
  }
}
