import { Request, Response, NextFunction } from 'express';
import * as App from "../../../../common/route";
import {grfiGrupFieldsPrivileguesComponent as GrfiGrupFieldsPrivileguesComponent}  from "../grfi-grupfieldsprivilegues.component";
import config from "../../config/config.json";

export class GrfiGrupFieldsPrivileguesRoute extends App.CommonRouter {

    constructor(grupFieldsPrivilegues:string, io?: any) {        
        super();
        this.dataRoute = "/grupapisprivilegues/";
        this.singleDataRoute= "/grupapisprivilegues/:id"; 
	    this.dataRouteSearch = "/grupapisprivileguesSearch/";
        this.commonComponent=GrfiGrupFieldsPrivileguesComponent;
        this.moduleName  = grupFieldsPrivilegues;
        this.moduleUrlRelative = config["module"].urlRelative;
        this.keyName = "_id";
        super.init();
        super.addSocket(io); 
    }
}

