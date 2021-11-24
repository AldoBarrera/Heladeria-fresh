import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";

var login = {
    logi_user: { 
        type:String, 
        unique:false, 
        required:true, 
        }, 
        logi_password: { 
            type:String, 
            unique:false, 
            required:true, 
            }, 

}

var loginSchema = new Schema(login);
export const Login = mongoose.model("logi_login", loginSchema);
