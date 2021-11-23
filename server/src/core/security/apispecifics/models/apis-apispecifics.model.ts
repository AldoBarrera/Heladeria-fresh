import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";

var apiSpecifics = {
    apis_code: { 
type:String, 
unique:false, 
required:true, 
}, 
apis_description: { 
type:String, 
unique:false, 
required:false, 
}, 
apis_apig_id: { 
type:Schema.Types.ObjectId, 
ref: "apig_apiGenerals", 
unique:false, 
required:true, 
}, 
apis_wmet_id: { 
type:Schema.Types.ObjectId, 
ref: "wmet_webMethods", 
unique:false, 
required:true, 
}, 

}

var apiSpecificsSchema = new Schema(apiSpecifics);
export const ApiSpecifics = mongoose.model("apis_apiSpecifics", apiSpecificsSchema);
