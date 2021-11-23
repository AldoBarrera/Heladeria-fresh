import { ApiGeneralsModel } from "./models/apigenerals.model";
import * as App from "../../../common/component";

class ApigApiGeneralsComponent extends App.CommonComponent {
    constructor() {
        super();
        this.modelDb = ApiGeneralsModel;
	    this.namePref = ApiGeneralsModel.namePref;
	    this.name = ApiGeneralsModel.name;
        this.keyName = ApiGeneralsModel.keyName;
    }   
}
var apigApiGeneralsComponent = new ApigApiGeneralsComponent();
export {apigApiGeneralsComponent};
export default apigApiGeneralsComponent;
