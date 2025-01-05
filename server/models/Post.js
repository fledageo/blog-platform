import { Schema,model } from "mongoose";

const Post = new Schema({
    title:{type:String,require:true},
    content:{type:String,require:true},
    author:{type:Schema.Types.ObjectId,ref:"user",require:true},
    timestamp: { type: Date, default: Date.now },
})

export default model("post",Post)