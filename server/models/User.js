import { Schema,model } from "mongoose";

const User = new Schema({
    name:{type:String,require:true},
    surname:{type:String,require:true},
    email:{type:String,unique:true,require:true},
    password:{type:String,require:true}    
})

export default model("user", User)