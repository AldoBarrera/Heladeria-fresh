import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";

var userGrupRelations = {
    usgr_user_id: { 
type:Schema.Types.ObjectId, 
ref: "user_users", 
unique:false, 
required:true, 
}, 
usgr_grup_id: { 
type:Schema.Types.ObjectId, 
ref: "grup_groups", 
unique:false, 
required:true, 
}, 

}

var userGrupRelationsSchema = new Schema(userGrupRelations);
export const UserGrupRelations = mongoose.model("usgr_userGrupRelations", userGrupRelationsSchema);
