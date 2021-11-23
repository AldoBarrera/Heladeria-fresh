import { Request, Response, NextFunction } from 'express';
import * as App from "../../../../common/route";
import {orddOrderDetailsComponent as OrddOrderDetailsComponent}  from "../ordd-orderdetails.component";
import config from "../../config/config.json";

export class OrddOrderDetailsRoute extends App.CommonRouter {

    constructor(orderDetails:string, io?: any) {        
        super();
        this.dataRoute = "/ordersdetails";
        this.singleDataRoute= "/ordersdetails/:id"; 
	    this.dataRouteSearch = "/ordersdetailsSearch";
        this.commonComponent=OrddOrderDetailsComponent;
        this.moduleName  = orderDetails;
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
        this.router.delete(this.singleDataRoute, this.DeleteData.bind(this));
    }

    async GetAllData(req: Request, res: Response, next: NextFunction) {
        let query = req.query;
        let dataResponse;
        let restrict = query.fields?JSON.parse(query.fields.toString()):null;
        if (restrict){
          dataResponse = await this.commonComponent.GetAllRestrictDataOrdersDetails(restrict);
        } else if(query.populate) {
          dataResponse = await this.commonComponent.GetPopulateDataOrdersDetails(query.date);
        } else {
          dataResponse = await this.commonComponent.GetAllDataOrdersDetails(query.date);
        }
        res.send(dataResponse);
    }
}

