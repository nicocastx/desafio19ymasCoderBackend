//import MsjsDAO from "../daos/mensajesDAO.js";
//import ProductosDAO from "../daos/productosDAO.js";
//import UsersDAO from "../daos/usuariosDAO.js";
import SingletonDAOS from "./SingletonDAOS.js";


export default class DAOFactory {
  static dao
  getDao(option) {
    let dao;
    switch (option) {
      case "mensajes":
        dao = new SingletonDAOS.SingletonDAOMsjs().obtenerDAO()
        break;
      case "productos":
        dao = new SingletonDAOS.SingletonDAOProducts().obtenerDAO()
        break;
      case "usuarios":
        dao = new SingletonDAOS.SingletonDAOUsers().obtenerDAO()
        break;
    }
    return dao;
  }
}
