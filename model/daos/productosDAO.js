import mongoose from "mongoose";
import formatDTO from "../dtos/ProductosDTO.js";
import { prodModel } from "../models/producto.js";

export default class ProductosDAO {
  async getAll() {
    const data = await prodModel.find();
    return formatDTO(data);
  }
  async save(obj) {
    let dataAdd = await prodModel(obj);
    dataAdd = { ...dataAdd._doc, id: dataAdd._id.toString() };
    await prodModel.insertMany(dataAdd);
    //devuelve el dato guardado
    return formatDTO(dataAdd);
  }

  async getById(id) {
    const data = await prodModel.find({ _id: new mongoose.Types.ObjectId(id) });
    return data;
  }

  async updateById(newObj, id) {
    const idUpdate = new mongoose.Types.ObjectId(id);
    return await prodModel.findByIdAndUpdate(idUpdate, newObj, {new: true});
  }

  async deleteById(id) {
    const data = await prodModel.findByIdAndDelete({
      _id: new mongoose.Types.ObjectId(id),
    });
    return data;
  }
}