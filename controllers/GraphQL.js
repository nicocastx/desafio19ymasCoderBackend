
import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";
import prodsAPI from '../services/productos.js'

  //se puede definir en otro archivo
  const schema = buildSchema(`
  type Producto {
      id: ID!,
      nombre: String,
      url: String,
      precio: Float,
      fecha: String
    }
    input ProductoInput{
      nombre: String,
      url: String,
      precio: Float
    }
    type Query{
      listarProductos: [Producto]
    }
    type Mutation{
      guardarProducto(datos: ProductoInput):Producto
      modificarProducto(id: ID!): Producto
      eliminarProducto: Producto
    }
  `);

export default class GraphQLController{
  constructor(){
    return graphqlHTTP({
      schema: schema,
      rootValue:{
        listarProductos: prodsAPI.listarProductos,
        guardarProducto: prodsAPI.guardarProducto,
        modificarProducto: prodsAPI.modificarProducto,
        eliminarProducto: prodsAPI.eliminarProducto
      },
      graphiql: true
    })
  }

}

