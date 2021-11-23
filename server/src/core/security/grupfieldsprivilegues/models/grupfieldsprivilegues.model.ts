import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";
import * as App from "../../../../common/models/mongoose/model";
import {GrupFieldsPrivilegues} from './grfi-grupfieldsprivilegues.model';

class GrfiGrupFieldsPrivileguesModel extends App.CommonModel {
    constructor() {
        super();
        this.name = "grupFieldsPrivilegues";
	    this.namePref = "grfi";
        this.model = GrupFieldsPrivilegues;
	    this.keyName = "_id";
    }    
}


export const GrupFieldsPrivileguesModel = new GrfiGrupFieldsPrivileguesModel();
