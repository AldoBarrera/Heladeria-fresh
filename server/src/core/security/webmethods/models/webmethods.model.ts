import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";
import * as App from "../../../../common/models/mongoose/model";
import {WebMethods} from './wmet-webmethods.model';

class WmetWebMethodsModel extends App.CommonModel {
    constructor() {
        super();
        this.name = "webMethods";
	    this.namePref = "wmet";
        this.model = WebMethods;
	    this.keyName = "_id";
    }    
}


export const WebMethodsModel = new WmetWebMethodsModel();
