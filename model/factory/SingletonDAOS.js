import MsjsDAO from "../daos/mensajesDAO.js";
import ProductosDAO from "../daos/productosDAO.js";
import UsersDAO from "../daos/usuariosDAO.js";

class SingletonDAOMsjs{
  static instance
  constructor(){
    if (!SingletonDAOMsjs.instance){
      this.dao = new MsjsDAO()
      SingletonDAOMsjs.instance = this
    } else{
      return SingletonDAOMsjs.instance
    }
  }

  obtenerDAO(){
    return this.dao
  }
}

class SingletonDAOUsers{
  static instance
  constructor(){
    if (!SingletonDAOUsers.instance){
      this.dao = new UsersDAO()
      SingletonDAOUsers.instance = this
    } else{
      return SingletonDAOUsers.instance
    }
  }

  obtenerDAO(){
    return this.dao
  }
}

class SingletonDAOProducts{
  static instance
  constructor(){
    if (!SingletonDAOProducts.instance){
      this.dao = new ProductosDAO()
      SingletonDAOProducts.instance = this
    } else{
      return SingletonDAOProducts.instance
    }
  }

  obtenerDAO(){
    return this.dao
  }
}

export default {
  SingletonDAOMsjs,
  SingletonDAOProducts,
  SingletonDAOUsers
}
