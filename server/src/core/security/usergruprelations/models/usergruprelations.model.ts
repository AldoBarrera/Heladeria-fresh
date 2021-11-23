import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";
import * as App from "../../../../common/models/mongoose/model";
import {UserGrupRelations} from './usgr-usergruprelations.model';

class UsgrUserGrupRelationsModel extends App.CommonModel {
    constructor() {
        super();
        this.name = "userGrupRelations";
	    this.namePref = "usgr";
        this.model = UserGrupRelations;
	    this.keyName = "_id";
    }    
}


export const UserGrupRelationsModel = new UsgrUserGrupRelationsModel();
