import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";
import * as App from "../../../../common/models/mongoose/model";
import {Users} from './user-users.model';

class UserUsersModel extends App.CommonModel {
    constructor() {
        super();
        this.name = "users";
	    this.namePref = "user";
        this.model = Users;
	    this.keyName = "_id";
    }    
}


export const UsersModel = new UserUsersModel();
