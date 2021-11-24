import { InventoryModel } from "./models/inventory.model";
import * as App from "../../../common/component";

class InveInventoryComponent extends App.CommonComponent {
    constructor() {
        super();
        this.modelDb = InventoryModel;
	    this.namePref = InventoryModel.namePref;
	    this.name = InventoryModel.name;
        this.keyName = InventoryModel.keyName;
    }   
    async GetAllDataInventory(date) {      
        if(date) {
            const dataResponse = await this.modelDb.find({inve_date:date});
            return dataResponse;
        }  
        const dataResponse = await this.modelDb.find({});
        return dataResponse;
    }

    async GetAllRestrictDataInventory(restrict: any) {        
        const dataResponse = await this.modelDb.find({}, {restrict:restrict});
        return dataResponse;
    }

    async GetPopulateDataInventory(date) {   
        var populate = this.modelDb.getPopulateFields();
        
        if(date) {
            const dataResponse = await this.modelDb.find({inve_date:date},{populate:populate});
            return dataResponse;
        } 
        const dataResponse = await this.modelDb.find({},{populate:populate});
        return dataResponse;
    }
}
var inveInventoryComponent = new InveInventoryComponent();
export {inveInventoryComponent};
export default inveInventoryComponent;
