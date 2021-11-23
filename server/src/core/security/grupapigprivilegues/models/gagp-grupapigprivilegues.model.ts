import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";

var grupApigPrivilegues = {
    gagp_grup_id: { 
type:Schema.Types.ObjectId, 
ref: "grup_groups", 
unique:false, 
required:true, 
}, 
gagp_apig_id: { 
type:Schema.Types.ObjectId, 
ref: "apig_apiGenerals", 
unique:false, 
required:true, 
}, 
gagp_grantaccess: { 
type:Boolean, 
unique:false, 
required:true, 
}, 

}

var grupApigPrivileguesSchema = new Schema(grupApigPrivilegues);
export const GrupApigPrivilegues = mongoose.model("gagp_grupApigPrivilegues", grupApigPrivileguesSchema);
