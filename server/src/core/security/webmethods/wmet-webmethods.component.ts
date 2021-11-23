import { WebMethodsModel } from "./models/webmethods.model";
import * as App from "../../../common/component";

class WmetWebMethodsComponent extends App.CommonComponent {
    constructor() {
        super();
        this.modelDb = WebMethodsModel;
	    this.namePref = WebMethodsModel.namePref;
	    this.name = WebMethodsModel.name;
        this.keyName = WebMethodsModel.keyName;
    }   
}
var wmetWebMethodsComponent = new WmetWebMethodsComponent();
export {wmetWebMethodsComponent};
export default wmetWebMethodsComponent;
