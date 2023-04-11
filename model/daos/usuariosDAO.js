import mongoose from "mongoose";
import { userModel } from "../models/usuarios.js";
import formatDTO from "../dtos/usuariosDTO.js";

//import { conexionMDB } from "../../optionsmdb.js";
//conexionMDB;

export default class UsersDAO {
  async getAll() {
    const data = await userModel.find();
    return formatDTO(data);
  }

  async save(obj) {
    let dataAdd = await userModel(obj);
    dataAdd = { ...dataAdd._doc, id: dataAdd._id.toString() };
    await userModel.insertMany(dataAdd);
    return formatDTO(dataAdd);
  }

  async getById(id) {
    const data = await userModel.find({ _id: mongoose.Types.ObjectId(id) });
    return formatDTO(data);
  }

  async deleteById(id) {
    const deleted = await userModel.find(id)
    await userModel.deleteOne({
      _id: mongoose.Types.ObjectId(id),
    });
    return formatDTO(deleted);
  }
}

/*try {
  console.log(await new usersDAO().save({
    email: 'nicocastx7@gmail.com',
    password: '$2b$10$6d3DJ6OzmUBqABWnbhLaXejjb240Yut1nqyLPK5.G9siJjQBrIVZW'
  }));
} catch (error) {}*/
