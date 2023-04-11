import DAOFactory from "../factory/DaoFactory.js";

//import { conexionMDB } from "../../optionsmdb.js";
//conexionMDB;

export default class MsjsRepo{
  dao;
  constructor(){
    this.dao = new DAOFactory().getDao('mensajes')
  }

  async getMensajes(){
    return await this.dao.getAll()
  }

  async guardarMensaje(msj){
    return await this.dao.save(msj)
  }
}
