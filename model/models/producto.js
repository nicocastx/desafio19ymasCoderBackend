import mongoose from "mongoose";


const prodCol = 'productos'

const prodSchema = mongoose.Schema({
    id: {type: String},
    nombre: {type: String},
    url: {type: String},
    precio: {type: Number},
    fecha: {type: String}
})

export const prodModel =  mongoose.model(prodCol, prodSchema)