import mongoose from "mongoose";

const userCol = 'usuarios'

const userSchema = mongoose.Schema({
  id: {type: String},
  email:{type: String, required: true},
  password:{type:String}
})

export const userModel = mongoose.model(userCol, userSchema)