import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";
import * as App from "../../../../common/models/mongoose/model";
import {ApiSpecifics} from './apis-apispecifics.model';

class ApisApiSpecificsModel extends App.CommonModel {
    constructor() {
        super();
        this.name = "apiSpecifics";
	    this.namePref = "apis";
        this.model = ApiSpecifics;
	    this.keyName = "_id";
    }    
}


export const ApiSpecificsModel = new ApisApiSpecificsModel();
