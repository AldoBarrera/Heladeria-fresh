import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";

var users = {
    user_name: { 
type:String, 
unique:true, 
required:true, 
}, 
user_password: { 
type:String, 
unique:false, 
required:false, 
}, 
user_email: { 
type:String, 
unique:false, 
required:false, 
}, 
user_domain: { 
type:String, 
unique:false, 
required:false, 
}, 

}

var usersSchema = new Schema(users);
export const Users = mongoose.model("user_users", usersSchema);
