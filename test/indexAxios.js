import axios from 'axios'

const url = 'http://localhost:8080/'

const newProducto = {
  nombre:"tengo este nuevo producto 3",
  url:"https://www.theonering.com/wp-content/uploads/2020/11/gandalf-laughing.jpg",
  precio: 20000
}

console.log('INGRESANDO AL CLIENTE AXIOS');

console.log('POST de producto');
axios.post(url, {newProducto: newProducto})
.then(data =>{
  console.log('La prueba post de producto se realizo correctamente');
})
.catch(err =>{
  console.log(err);
})

console.log('GET de producto');

axios(url)
.then(data =>{
  console.log('La prueba get de producto se realizo correctamente');
})
.catch(err =>{
  console.log(err);
})

console.log('put producto');

axios.put(url + '64354945a44d6d62cf1a1005', {newProducto: {nombre: 'Mauricio'}})
.then(data =>{
  console.log('La prueba put de producto se realizo correctamente');
})
.catch(err =>{
  console.log(err);
})

console.log('delete de producto');

axios.delete(url + '641e36c8ccd4321983810ffd')
.then(data =>{
  console.log('La prueba delete de producto se realizo correctamente');
})
.catch(err =>{
  console.log(err);
})