import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";

var orderDetails = {
    ordd_dish_id: { 
type:Schema.Types.ObjectId, 
ref: "dish_dishes", 
unique:false, 
required:true, 
}, 
ordd_count: { 
type:Number, 
unique:false, 
required:false, 
}, 
ordd_ordn_id: { 
type:Schema.Types.ObjectId, 
ref: "ordn_order", 
unique:false, 
required:true, 
}, 
ordd_date: { 
    type:Date, 
    unique:false, 
    required:false, 
    }, 

}

var orderDetailsSchema = new Schema(orderDetails);
export const OrderDetails = mongoose.model("ordd_orderDetails", orderDetailsSchema);
