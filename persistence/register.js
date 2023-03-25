import { contenedorMDB } from "./ContenedorMDB.js";
import {userModel} from "./models/usuarios.js";

const cUsers = new contenedorMDB(userModel);

async function listarUsers() {
  return await cUsers.getAll();
}

async function addUser(obj){
  return await cUsers.save(obj)
}

export default {
  listarUsers, addUser
}