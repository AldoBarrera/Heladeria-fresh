import { GrupFieldsPrivileguesModel } from "./models/grupfieldsprivilegues.model";
import * as App from "../../../common/component";

class GrfiGrupFieldsPrivileguesComponent extends App.CommonComponent {
    constructor() {
        super();
        this.modelDb = GrupFieldsPrivileguesModel;
	    this.namePref = GrupFieldsPrivileguesModel.namePref;
	    this.name = GrupFieldsPrivileguesModel.name;
        this.keyName = GrupFieldsPrivileguesModel.keyName;
    }   
}
var grfiGrupFieldsPrivileguesComponent = new GrfiGrupFieldsPrivileguesComponent();
export {grfiGrupFieldsPrivileguesComponent};
export default grfiGrupFieldsPrivileguesComponent;
