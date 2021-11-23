import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";
import * as App from "../../../../common/models/mongoose/model";
import {Fields} from './fiel-fields.model';

class FielFieldsModel extends App.CommonModel {
    constructor() {
        super();
        this.name = "fields";
	    this.namePref = "fiel";
        this.model = Fields;
	    this.keyName = "_id";
    }    
}


export const FieldsModel = new FielFieldsModel();
