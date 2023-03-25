import db from '../persistence/register.js'

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

