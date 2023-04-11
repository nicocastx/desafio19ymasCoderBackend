/**
Luego, realizar las mismas pruebas, a través de un código de test apropiado
, que utilice mocha, chai y Supertest, para probar cada uno de los métodos
 HTTP de la API Rest de productos.
Escribir una suite de test para verificar si las respuestas a la lectura,
 incorporación, modificación y borrado de productos son las apropiadas.
  Generar un reporte con los resultados obtenidos de la salida del test.

 */

import axios from 'axios'
import { describe, it } from 'mocha'
import chai from 'chai'

const expect = chai.expect
const newProducto = {
  nombre:"Agregando nuevo producto desde MOCHA",
  url:"https://www.theonering.com/wp-content/uploads/2020/11/gandalf-laughing.jpg",
  precio: 20000
}
const url = 'http://localhost:8080/'

describe('Testeando API REST con librerias de testeo',async function() {

  it('Obtener todos los productos',async function() {
    const respuesta = await axios(url)
    expect(respuesta.data.length > 1).to.equal(true)
  })

  it('Agregar un nuevo producto', async function(){
    const respuesta = await axios.post(url, {newProducto: newProducto})
    expect(respuesta.status).to.equal(200)
  })
  
  //falta xd
  it('Modificar un producto', async function(){
    const respuesta = await axios.put(url + '64354945a44d6d62cf1a1005', {newProducto: {nombre: 'Julianxd'}})
    expect(respuesta.status).to.equal(200)
  })

  it('Eliminar un producto', async function(){
    const respuesta = await axios.delete(url + '641e36c8ccd4321983810ffd')
    expect(respuesta.status).to.equal(200)
  })
})