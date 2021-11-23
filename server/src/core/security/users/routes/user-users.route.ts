import { Request, Response, NextFunction } from 'express';
import * as App from "../../../../common/route";
import {userUsersComponent as UserUsersComponent}  from "../user-users.component";
import config from "../../config/config.json";

export class UserUsersRoute extends App.CommonRouter {

    constructor(users:string, io?: any) {        
        super();
        this.dataRoute = "/users/";
        this.singleDataRoute= "/users/:id"; 
	    this.dataRouteSearch = "/usersSearch/";
        this.commonComponent=UserUsersComponent;
        this.moduleName  = users;
        this.moduleUrlRelative = config["module"].urlRelative;
        this.keyName = "_id";
        super.init();
        super.addSocket(io); 
    }
}

