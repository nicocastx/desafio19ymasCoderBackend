import formatDTO from '../dtos/mensajesDTO.js'
import { msjModel } from "../models/mensajes.js";
import mongoose from 'mongoose';

//import { conexionMDB } from "../../optionsmdb.js";
//conexionMDB;


 export default class MsjsDAO {
  async getAll() {
    const data = await msjModel.find()
    return formatDTO(data)
  }

  async save(obj) {
    let dataAdd = await msjModel(obj)
    dataAdd = {...dataAdd._doc, id: dataAdd._id.toString()}
    await msjModel.insertMany(dataAdd)
    return formatDTO(dataAdd)
  }

}

/*try {
  console.log(await new MsjsDAO().getAll());
} catch (error) {}*/
