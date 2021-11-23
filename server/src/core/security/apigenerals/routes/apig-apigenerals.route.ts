import { Request, Response, NextFunction } from 'express';
import * as App from "../../../../common/route";
import {apigApiGeneralsComponent as ApigApiGeneralsComponent}  from "../apig-apigenerals.component";
import config from "../../config/config.json";

export class ApigApiGeneralsRoute extends App.CommonRouter {

    constructor(apiGenerals:string, io?: any) {        
        super();
        this.dataRoute = "/apigenerals/";
        this.singleDataRoute= "/apigenerals/:id"; 
	    this.dataRouteSearch = "/apigeneralsSearch/";
        this.commonComponent=ApigApiGeneralsComponent;
        this.moduleName  = apiGenerals;
        this.moduleUrlRelative = config["module"].urlRelative;
        this.keyName = "_id";
        super.init();
        super.addSocket(io); 
    }
}

