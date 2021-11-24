import { Request, Response, NextFunction } from 'express';
import * as App from "../../../../common/route";
import {inveInventoryComponent as InveInventoryComponent}  from "../inve-inventory.component";
import config from "../../config/config.json";

export class InveInventoryRoute extends App.CommonRouter {

    constructor(inventory:string, io?: any) {        
        super();
        this.dataRoute = "/inventory";
        this.singleDataRoute= "/inventory/:id"; 
	    this.dataRouteSearch = "/inventorySearch";
        this.commonComponent=InveInventoryComponent;
        this.moduleName  = inventory;
        this.moduleUrlRelative = config["module"].urlRelative;
        this.keyName = "_id";
        super.init();
        super.addSocket(io); 
    }

    public async init() {
      super.init();
      this.router.get(this.dataRoute, this.GetAllData.bind(this));
        this.router.get(this.singleDataRoute, this.GetSingleData.bind(this));
    }

    async GetAllData(req: Request, res: Response, next: NextFunction) {
        let query = req.query;
        var sessionData = req.session;
         sessionData.user="luz@gmail.com";
        let dataResponse;
        let restrict = query.fields?JSON.parse(query.fields.toString()):null;
        if (restrict){
          dataResponse = await this.commonComponent.GetAllRestrictDataInventory(restrict);
        } else if(query.populate) {
          dataResponse = await this.commonComponent.GetPopulateDataInventory(query.date);
        } else {
          dataResponse = await this.commonComponent.GetAllDataInventory(query.date);
        }
        dataResponse.login = req.session.user;
        res.send(dataResponse);
    }
}

