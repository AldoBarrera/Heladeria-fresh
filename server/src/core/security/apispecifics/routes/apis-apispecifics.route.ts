import { Request, Response, NextFunction } from 'express';
import * as App from "../../../../common/route";
import {apisApiSpecificsComponent as ApisApiSpecificsComponent}  from "../apis-apispecifics.component";
import config from "../../config/config.json";

export class ApisApiSpecificsRoute extends App.CommonRouter {

    constructor(apiSpecifics:string, io?: any) {        
        super();
        this.dataRoute = "/apispecifics/";
        this.singleDataRoute= "/apispecifics/:id"; 
	    this.dataRouteSearch = "/apispecificsSearch/";
        this.commonComponent=ApisApiSpecificsComponent;
        this.moduleName  = apiSpecifics;
        this.moduleUrlRelative = config["module"].urlRelative;
        this.keyName = "_id";
        super.init();
        super.addSocket(io); 
    }
}

