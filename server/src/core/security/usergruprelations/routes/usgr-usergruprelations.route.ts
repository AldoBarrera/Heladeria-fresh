import { Request, Response, NextFunction } from 'express';
import * as App from "../../../../common/route";
import {usgrUserGrupRelationsComponent as UsgrUserGrupRelationsComponent}  from "../usgr-usergruprelations.component";
import config from "../../config/config.json";

export class UsgrUserGrupRelationsRoute extends App.CommonRouter {

    constructor(userGrupRelations:string, io?: any) {        
        super();
        this.dataRoute = "/usergruprelations/";
        this.singleDataRoute= "/usergruprelations/:id"; 
	    this.dataRouteSearch = "/usergruprelationsSearch/";
        this.commonComponent=UsgrUserGrupRelationsComponent;
        this.moduleName  = userGrupRelations;
        this.moduleUrlRelative = config["module"].urlRelative;
        this.keyName = "_id";
        super.init();
        super.addSocket(io); 
    }
}

