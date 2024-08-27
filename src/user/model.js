import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email:String,
    name:String,
    password:String,
},{
    timestamps:true
})

const User = model("user",UserSchema)

export default User