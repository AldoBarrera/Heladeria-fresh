import { OrderDetailsModel } from "./models/orderdetails.model";
import * as App from "../../../common/component";

class OrddOrderDetailsComponent extends App.CommonComponent {
    constructor() {
        super();
        this.modelDb = OrderDetailsModel;
	    this.namePref = OrderDetailsModel.namePref;
	    this.name = OrderDetailsModel.name;
        this.keyName = OrderDetailsModel.keyName;
    }   

    async GetAllDataOrdersDetails(date) {      
        if(date) {
            const dataResponse = await this.modelDb.find({ordd_date:date});
            return dataResponse;
        }  
        const dataResponse = await this.modelDb.find({});
        return dataResponse;
    }

    async GetAllRestrictDataOrdersDetails(restrict: any) {        
        const dataResponse = await this.modelDb.find({}, {restrict:restrict});
        return dataResponse;
    }

    async GetPopulateDataOrdersDetails(date) {   
        var populate = this.modelDb.getPopulateFields();
        
        if(date) {
            const dataResponse = await this.modelDb.find({ordd_date:date},{populate:populate});
            return dataResponse;
        } 
        const dataResponse = await this.modelDb.find({},{populate:populate});
        return dataResponse;
    }
}
var orddOrderDetailsComponent = new OrddOrderDetailsComponent();
export {orddOrderDetailsComponent};
export default orddOrderDetailsComponent;
