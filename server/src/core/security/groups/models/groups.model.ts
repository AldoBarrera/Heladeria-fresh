import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";
import * as App from "../../../../common/models/mongoose/model";
import {Groups} from './grup-groups.model';

class GrupGroupsModel extends App.CommonModel {
    constructor() {
        super();
        this.name = "groups";
	    this.namePref = "grup";
        this.model = Groups;
	    this.keyName = "_id";
    }    
}


export const GroupsModel = new GrupGroupsModel();
