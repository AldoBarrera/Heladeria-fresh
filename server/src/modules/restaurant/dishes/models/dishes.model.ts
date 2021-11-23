import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";
import * as App from "../../../../common/models/mongoose/model";
import {Dishes} from './dish-dishes.model';

class DishDishesModel extends App.CommonModel {
    constructor() {
        super();
        this.name = "dishes";
	    this.namePref = "dish";
        this.model = Dishes;
	    this.keyName = "_id";
    }    
}


export const DishesModel = new DishDishesModel();
