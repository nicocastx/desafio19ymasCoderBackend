import DAOFactory from "../factory/DaoFactory.js";

export default class UsersRepo{
  dao;
  constructor(){
    this.dao = new DAOFactory().getDao('usuarios')
  }

  async listarUsers(){
    return await this.dao.getAll()
  }

  async addUser(user){
    return await this.dao.save(user)
  }
}
