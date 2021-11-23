import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";

var apiGenerals = {
    apig_code: { 
type:String, 
unique:true, 
required:true, 
}, 
apig_description: { 
type:String, 
unique:false, 
required:false, 
}, 

}

var apiGeneralsSchema = new Schema(apiGenerals);
export const ApiGenerals = mongoose.model("apig_apiGenerals", apiGeneralsSchema);
