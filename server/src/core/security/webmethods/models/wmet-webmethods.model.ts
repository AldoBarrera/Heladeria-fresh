import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";

var webMethods = {
    wmet_name: { 
type:String, 
unique:true, 
required:true, 
}, 

}

var webMethodsSchema = new Schema(webMethods);
export const WebMethods = mongoose.model("wmet_webMethods", webMethodsSchema);
