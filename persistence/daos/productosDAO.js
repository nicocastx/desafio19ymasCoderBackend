import mongoose from "mongoose";
import formatDTO from "../dtos/ProductosDTO.js";
import { prodModel } from "../models/producto.js";

export default class ProductosDAO {
  async getAll() {
    const data = await prodModel.find()
    return formatDTO(data)
  }
    async save(obj) {
      let dataAdd = await prodModel(obj)
      dataAdd = {...dataAdd._doc, id: dataAdd._id.toString()}
      await prodModel.insertMany(dataAdd)
      return formatDTO(dataAdd)
    }

    async getById(id){
      const data = await prodModel.find({_id: new mongoose.Types.ObjectId(id)})
      return data
    }

    async deleteById(id){
      const data = await prodModel.deleteOne({_id: new mongoose.Types.ObjectId(id)})
      return data
    }
}


