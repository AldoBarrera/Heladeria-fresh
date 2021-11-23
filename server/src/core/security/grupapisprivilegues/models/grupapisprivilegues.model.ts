import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";
import * as App from "../../../../common/models/mongoose/model";
import {GrupApisPrivilegues} from './gasp-grupapisprivilegues.model';

class GaspGrupApisPrivileguesModel extends App.CommonModel {
    constructor() {
        super();
        this.name = "grupApisPrivilegues";
	    this.namePref = "gasp";
        this.model = GrupApisPrivilegues;
	    this.keyName = "_id";
    }    
}


export const GrupApisPrivileguesModel = new GaspGrupApisPrivileguesModel();
