import { Request, Response, NextFunction } from 'express';
import * as App from "../../../../common/route";
import {dishDishesComponent as DishDishesComponent}  from "../dish-dishes.component";
import config from "../../config/config.json";

export class DishDishesRoute extends App.CommonRouter {

    constructor(dishes:string, io?: any) {        
        super();
        this.dataRoute = "/dishes";
        this.singleDataRoute= "/dishes/:id"; 
	    this.dataRouteSearch = "/dishesSearch";
        this.commonComponent=DishDishesComponent;
        this.moduleName  = dishes;
        this.moduleUrlRelative = config["module"].urlRelative;
        this.keyName = "_id";
        this.init();
        super.addSocket(io); 
    }

    public async init() {
        super.init();
        this.router.get(this.dataRoute, this.GetAllData.bind(this));
    }
}

