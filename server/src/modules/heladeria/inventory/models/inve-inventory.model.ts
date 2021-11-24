import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";

var inventory = {
    inve_dish_id: { 
type:Schema.Types.ObjectId, 
ref: "dish_dishes", 
unique:false, 
required:true, 
}, 
inve_available: { 
type:Number, 
unique:false, 
required:false, 
}, 
inve_date: { 
type:Date, 
unique:false, 
required:false, 
}, 

}

var inventorySchema = new Schema(inventory);
export const Inventory = mongoose.model("inve_inventory", inventorySchema);
