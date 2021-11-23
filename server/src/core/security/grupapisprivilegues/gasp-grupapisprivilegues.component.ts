import { GrupApisPrivileguesModel } from "./models/grupapisprivilegues.model";
import * as App from "../../../common/component";

class GaspGrupApisPrivileguesComponent extends App.CommonComponent {
    constructor() {
        super();
        this.modelDb = GrupApisPrivileguesModel;
	    this.namePref = GrupApisPrivileguesModel.namePref;
	    this.name = GrupApisPrivileguesModel.name;
        this.keyName = GrupApisPrivileguesModel.keyName;
    }   
}
var gaspGrupApisPrivileguesComponent = new GaspGrupApisPrivileguesComponent();
export {gaspGrupApisPrivileguesComponent};
export default gaspGrupApisPrivileguesComponent;
