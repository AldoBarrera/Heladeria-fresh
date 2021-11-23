import { OrderModel } from "./models/order.model";
import * as App from "../../../common/component";

class OrdnOrderComponent extends App.CommonComponent {
    constructor() {
        super();
        this.modelDb = OrderModel;
	    this.namePref = OrderModel.namePref;
	    this.name = OrderModel.name;
        this.keyName = OrderModel.keyName;
    }   
    async GetAllDataOrders(date) {      
        if(date) {
            const dataResponse = await this.modelDb.find({ordn_date:date});
            return dataResponse;
        }  
        const dataResponse = await this.modelDb.find({});
        return dataResponse;
    }

    async GetAllRestrictDataOrders(restrict: any) {        
        const dataResponse = await this.modelDb.find({}, {restrict:restrict});
        return dataResponse;
    }

    async GetPopulateDataOrders(date) {   
        var populate = this.modelDb.getPopulateFields();
        
        if(date) {
            const dataResponse = await this.modelDb.find({ordn_date:date});
            return dataResponse;
        } 
        const dataResponse = await this.modelDb.find({},{populate:populate});
        return dataResponse;
    }
}
var ordnOrderComponent = new OrdnOrderComponent();
export {ordnOrderComponent};
export default ordnOrderComponent;
