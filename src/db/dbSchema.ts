import mongoose from "mongoose";
const urlschema=new mongoose.Schema({
    fullurl:{type:String,required:true},
    shorturl:{type:String,required:true},
    clicks:{type:Number,default:0}
})

export const UrlModel=mongoose.model("url",urlschema);
export const createshort=(values:Object)=> new UrlModel(values).save().then((data)=>data.toObject());
export const getbyFullUrl=(fullurl:string)=> UrlModel.findOne({fullurl});
export const getByshortUrl=(shorturl:string)=> UrlModel.findOne({shorturl});