import { ApiSpecificsModel } from "./models/apispecifics.model";
import * as App from "../../../common/component";

class ApisApiSpecificsComponent extends App.CommonComponent {
    constructor() {
        super();
        this.modelDb = ApiSpecificsModel;
	    this.namePref = ApiSpecificsModel.namePref;
	    this.name = ApiSpecificsModel.name;
        this.keyName = ApiSpecificsModel.keyName;
    }   
}
var apisApiSpecificsComponent = new ApisApiSpecificsComponent();
export {apisApiSpecificsComponent};
export default apisApiSpecificsComponent;
