import { Request, Response, NextFunction } from 'express';
import * as App from "../../../../common/route";
import {gagpGrupApigPrivileguesComponent as GagpGrupApigPrivileguesComponent}  from "../gagp-grupapigprivilegues.component";
import config from "../../config/config.json";

export class GagpGrupApigPrivileguesRoute extends App.CommonRouter {

    constructor(grupApigPrivilegues:string, io?: any) {        
        super();
        this.dataRoute = "/grupapigprivilegues/";
        this.singleDataRoute= "/grupapigprivilegues/:id"; 
	    this.dataRouteSearch = "/grupapigprivileguesSearch/";
        this.commonComponent=GagpGrupApigPrivileguesComponent;
        this.moduleName  = grupApigPrivilegues;
        this.moduleUrlRelative = config["module"].urlRelative;
        this.keyName = "_id";
        super.init();
        super.addSocket(io); 
    }
}

