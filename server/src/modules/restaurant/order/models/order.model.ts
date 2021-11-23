import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";
import * as App from "../../../../common/models/mongoose/model";
import {Order} from './ordn-order.model';

class OrdnOrderModel extends App.CommonModel {
    constructor() {
        super();
        this.name = "order";
	    this.namePref = "ordn";
        this.model = Order;
	    this.keyName = "_id";
    }    
}


export const OrderModel = new OrdnOrderModel();
