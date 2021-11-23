import { GrupApigPrivileguesModel } from "./models/grupapigprivilegues.model";
import * as App from "../../../common/component";

class GagpGrupApigPrivileguesComponent extends App.CommonComponent {
    constructor() {
        super();
        this.modelDb = GrupApigPrivileguesModel;
	    this.namePref = GrupApigPrivileguesModel.namePref;
	    this.name = GrupApigPrivileguesModel.name;
        this.keyName = GrupApigPrivileguesModel.keyName;
    }   
}
var gagpGrupApigPrivileguesComponent = new GagpGrupApigPrivileguesComponent();
export {gagpGrupApigPrivileguesComponent};
export default gagpGrupApigPrivileguesComponent;
