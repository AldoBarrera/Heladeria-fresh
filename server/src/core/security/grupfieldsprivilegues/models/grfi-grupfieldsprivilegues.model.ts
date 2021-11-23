import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";

var grupFieldsPrivilegues = {
    gasp_grup_id: { 
type:Schema.Types.ObjectId, 
ref: "grup_groups", 
unique:false, 
required:true, 
}, 
gasp_apig_id: { 
type:Schema.Types.ObjectId, 
ref: "apig_apiGenerals", 
unique:false, 
required:true, 
}, 
gasp_apis_id: { 
type:Schema.Types.ObjectId, 
ref: "apis_apiSpecifics", 
unique:false, 
required:true, 
}, 
gasp_grantaccess: { 
type:Boolean, 
unique:false, 
required:true, 
}, 

}

var grupFieldsPrivileguesSchema = new Schema(grupFieldsPrivilegues);
export const GrupFieldsPrivilegues = mongoose.model("grfi_grupFieldsPrivilegues", grupFieldsPrivileguesSchema);
