import DAOFactory from "../factory/DaoFactory.js";

//import { conexionMDB } from "../../optionsmdb.js";
//conexionMDB;

export default class ProductosRepo{
  dao;
  constructor(){
    this.dao = new DAOFactory().getDao('productos')
  }

  async getProductos(){
    return await this.dao.getAll()
  }

  async guardarProducto(prod){
    prod.fecha = new Date().toLocaleString()
    return await this.dao.save(prod)
  }

  async borrarProductos(id){
    return await this.dao.deleteById(id)
  }

  async modProducto(newProd, id){
    return await this.dao.updateById(newProd, id)
  }
   
}