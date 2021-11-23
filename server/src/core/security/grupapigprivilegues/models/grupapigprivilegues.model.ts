import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";
import * as App from "../../../../common/models/mongoose/model";
import {GrupApigPrivilegues} from './gagp-grupapigprivilegues.model';

class GagpGrupApigPrivileguesModel extends App.CommonModel {
    constructor() {
        super();
        this.name = "grupApigPrivilegues";
	    this.namePref = "gagp";
        this.model = GrupApigPrivilegues;
	    this.keyName = "_id";
    }    
}


export const GrupApigPrivileguesModel = new GagpGrupApigPrivileguesModel();
