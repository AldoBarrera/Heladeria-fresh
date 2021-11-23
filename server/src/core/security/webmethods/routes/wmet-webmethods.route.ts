import { Request, Response, NextFunction } from 'express';
import * as App from "../../../../common/route";
import {wmetWebMethodsComponent as WmetWebMethodsComponent}  from "../wmet-webmethods.component";
import config from "../../config/config.json";

export class WmetWebMethodsRoute extends App.CommonRouter {

    constructor(webMethods:string, io?: any) {        
        super();
        this.dataRoute = "/webmethods/";
        this.singleDataRoute= "/webmethods/:id"; 
	    this.dataRouteSearch = "/webmethodsSearch/";
        this.commonComponent=WmetWebMethodsComponent;
        this.moduleName  = webMethods;
        this.moduleUrlRelative = config["module"].urlRelative;
        this.keyName = "_id";
        super.init();
        super.addSocket(io); 
    }
}

