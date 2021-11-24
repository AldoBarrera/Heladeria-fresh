import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";
import * as App from "../../../../common/models/mongoose/model";
import {Inventory} from './inve-inventory.model';

class InveInventoryModel extends App.CommonModel {
    constructor() {
        super();
        this.name = "inventory";
	    this.namePref = "inve";
        this.model = Inventory;
	    this.keyName = "_id";
    }    
    async find(query, options) {
        let data ;
        if(options && options.populate)
            data = await this.findAndPopulateFix(query, options.populate);
        else if(options && options.restrict) {
            data = await this.model.find({}, options.restrict);
        } else if (query && Object.keys(query).length > 0) {
            data = await this.model.find(query);
        } else
            data = await this.model.find();
        return data
    } 

    async findAndPopulateFix(query, populate:string) {
        let data = await this.model.find(query).populate(populate);
        return data
    }
}


export const InventoryModel = new InveInventoryModel();
