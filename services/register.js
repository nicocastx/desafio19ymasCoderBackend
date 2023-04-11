import UsersRepo from "../model/repos/UsersRepo.js"
//import db from '../persistence/register.js'

const db = new UsersRepo()

async function listarUsers(){
  return await db.listarUsers()
}

async function guardarUser(user){
  return await db.addUser(user)
}

export default {
  listarUsers,
  guardarUser
}

