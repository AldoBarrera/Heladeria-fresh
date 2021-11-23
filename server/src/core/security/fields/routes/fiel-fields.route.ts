import { Request, Response, NextFunction } from 'express';
import * as App from "../../../../common/route";
import {fielFieldsComponent as FielFieldsComponent}  from "../fiel-fields.component";
import config from "../../config/config.json";

export class FielFieldsRoute extends App.CommonRouter {

    constructor(fields:string, io?: any) {        
        super();
        this.dataRoute = "/fields/";
        this.singleDataRoute= "/fields/:id"; 
	    this.dataRouteSearch = "/fieldsSearch/";
        this.commonComponent=FielFieldsComponent;
        this.moduleName  = fields;
        this.moduleUrlRelative = config["module"].urlRelative;
        this.keyName = "_id";
        super.init();
        super.addSocket(io); 
    }
}

