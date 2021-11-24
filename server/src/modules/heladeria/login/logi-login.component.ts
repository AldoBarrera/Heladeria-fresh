import { LoginModel } from "./models/login.model";
import * as App from "../../../common/component";

class LogiLoginComponent extends App.CommonComponent {
    constructor() {
        super();
        this.modelDb = LoginModel;
	    this.namePref = LoginModel.namePref;
	    this.name = LoginModel.name;
        this.keyName = LoginModel.keyName;
    }   
}
var logiLoginComponent = new LogiLoginComponent();
export {logiLoginComponent};
export default logiLoginComponent;
