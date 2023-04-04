import MsjsDAO from "../daos/mensajesDAO.js";
import ProductosDAO from "../daos/productosDAO.js";
import UsersDAO from "../daos/usuariosDAO.js";

export default class DAOFactory {
  getDao(option) {
    let dao;
    switch (option) {
      case "mensajes":
        dao = new MsjsDAO();
        break;
      case "productos":
        dao = new ProductosDAO();
        break;
      case "usuarios":
        dao = new UsersDAO();
        break;
    }
    return dao;
  }
}
