import { faker } from "@faker-js/faker";
import os from 'os'

async function crearProductosTest(num){
  let productosTest = [];
let i = 0;
while (i < num) {
  i++;
  let newProd = {
    nombre: faker.commerce.product(),
    precio: faker.commerce.price(200, 500),
    url: faker.image.fashion(),
  };
  productosTest.push(newProd);
}
return {
  data: productosTest,
  hasProd: productosTest.length > 0,
}
}

async function getInfo(){
  const info = {
    args: process.argv.slice(2),
    nOS: process.platform,
    vNODE: process.version,
    memUsage: process.memoryUsage().rss,
    exPath: process.cwd(),
    pid: process.pid,
    file: process.cwd().split("\\").pop(),
    numCPUs: os.cpus.length,
  }
  return info
}

export default {
  crearProductosTest,
  getInfo
}

