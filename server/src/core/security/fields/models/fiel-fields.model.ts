import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";

var fields = {
    fiel_key: { 
type:String, 
unique:true, 
required:true, 
}, 
fiel_label: { 
type:String, 
unique:false, 
required:false, 
}, 
fiel_value: { 
type:String, 
unique:false, 
required:false, 
}, 
fiel_required: { 
type:Boolean, 
unique:false, 
required:true, 
}, 
fiel_type: { 
type:String, 
unique:false, 
required:false, 
}, 
fiel_order: { 
type:Number, 
unique:false, 
required:false, 
}, 
fiel_control: { 
type:String, 
unique:false, 
required:false, 
}, 

}

var fieldsSchema = new Schema(fields);
export const Fields = mongoose.model("fiel_fields", fieldsSchema);
