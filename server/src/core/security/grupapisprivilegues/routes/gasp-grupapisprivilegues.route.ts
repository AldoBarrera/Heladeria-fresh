import { Request, Response, NextFunction } from 'express';
import * as App from "../../../../common/route";
import {gaspGrupApisPrivileguesComponent as GaspGrupApisPrivileguesComponent}  from "../gasp-grupapisprivilegues.component";
import config from "../../config/config.json";

export class GaspGrupApisPrivileguesRoute extends App.CommonRouter {

    constructor(grupApisPrivilegues:string, io?: any) {        
        super();
        this.dataRoute = "/grupapisprivilegues/";
        this.singleDataRoute= "/grupapisprivilegues/:id"; 
	    this.dataRouteSearch = "/grupapisprivileguesSearch/";
        this.commonComponent=GaspGrupApisPrivileguesComponent;
        this.moduleName  = grupApisPrivilegues;
        this.moduleUrlRelative = config["module"].urlRelative;
        this.keyName = "_id";
        super.init();
        super.addSocket(io); 
    }
}

