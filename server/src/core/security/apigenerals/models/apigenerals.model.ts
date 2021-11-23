import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";
import * as App from "../../../../common/models/mongoose/model";
import {ApiGenerals} from './apig-apigenerals.model';

class ApigApiGeneralsModel extends App.CommonModel {
    constructor() {
        super();
        this.name = "apiGenerals";
	    this.namePref = "apig";
        this.model = ApiGenerals;
	    this.keyName = "_id";
    }    
}


export const ApiGeneralsModel = new ApigApiGeneralsModel();
