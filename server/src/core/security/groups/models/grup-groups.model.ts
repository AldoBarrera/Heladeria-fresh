import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";

var groups = {
    grup_code: { 
type:String, 
unique:true, 
required:true, 
}, 
grup_description: { 
type:String, 
unique:false, 
required:false, 
}, 

}

var groupsSchema = new Schema(groups);
export const Groups = mongoose.model("grup_groups", groupsSchema);
