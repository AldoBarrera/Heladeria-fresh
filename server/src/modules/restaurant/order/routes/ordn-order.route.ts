import { Request, Response, NextFunction } from 'express';
import * as App from "../../../../common/route";
import {ordnOrderComponent as OrdnOrderComponent}  from "../ordn-order.component";
import config from "../../config/config.json";

export class OrdnOrderRoute extends App.CommonRouter {

    constructor(order:string, io?: any) {        
        super();
        this.dataRoute = "/orders";
        this.singleDataRoute= "/orders/:id"; 
	    this.dataRouteSearch = "/ordersSearch";
        this.commonComponent=OrdnOrderComponent;
        this.moduleName  = order;
        this.moduleUrlRelative = config["module"].urlRelative;
        this.keyName = "_id";
        this.init();
        super.addSocket(io); 
    }

    public async init() {
        super.init();
        this.router.get(this.dataRoute, this.GetAllData.bind(this));
        this.router.get(this.singleDataRoute, this.GetSingleData.bind(this));
        this.router.post(this.dataRoute, this.InsertData.bind(this));
    }

    async GetAllData(req: Request, res: Response, next: NextFunction) {
        let query = req.query;
        let dataResponse;
        let restrict = query.fields?JSON.parse(query.fields.toString()):null;
        if (restrict){
          dataResponse = await this.commonComponent.GetAllRestrictDataOrders(restrict);
        } else if(query.populate) {
          dataResponse = await this.commonComponent.GetPopulateDataOrders(query.date);
        } else {
          dataResponse = await this.commonComponent.GetAllDataOrders(query.date);
        }
        res.send(dataResponse);
    }
}

