import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";

var dishes = {
    dish_name: { 
type:String, 
unique:true, 
required:true, 
}, 
dish_precio: { 
type:Number, 
unique:false, 
required:false, 
}, 
dish_image: { 
type:String, 
unique:false, 
required:false, 
}, 
dish_description: { 
type:String, 
unique:false, 
required:false, 
}, 
dish_type: { 
    type:String, 
    unique:false, 
    required:false, 
    }, 

}

var dishesSchema = new Schema(dishes);
export const Dishes = mongoose.model("dish_dishes", dishesSchema);
