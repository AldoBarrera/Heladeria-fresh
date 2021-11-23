import { FieldsModel } from "./models/fields.model";
import * as App from "../../../common/component";

class FielFieldsComponent extends App.CommonComponent {
    constructor() {
        super();
        this.modelDb = FieldsModel;
	    this.namePref = FieldsModel.namePref;
	    this.name = FieldsModel.name;
        this.keyName = FieldsModel.keyName;
    }   
}
var fielFieldsComponent = new FielFieldsComponent();
export {fielFieldsComponent};
export default fielFieldsComponent;
