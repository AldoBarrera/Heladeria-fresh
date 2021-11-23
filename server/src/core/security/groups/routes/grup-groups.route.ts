import { Request, Response, NextFunction } from 'express';
import * as App from "../../../../common/route";
import {grupGroupsComponent as GrupGroupsComponent}  from "../grup-groups.component";
import config from "../../config/config.json";

export class GrupGroupsRoute extends App.CommonRouter {

    constructor(groups:string, io?: any) {        
        super();
        this.dataRoute = "/groups/";
        this.singleDataRoute= "/groups/:id"; 
	    this.dataRouteSearch = "/groupsSearch/";
        this.commonComponent=GrupGroupsComponent;
        this.moduleName  = groups;
        this.moduleUrlRelative = config["module"].urlRelative;
        this.keyName = "_id";
        super.init();
        super.addSocket(io); 
    }
}

