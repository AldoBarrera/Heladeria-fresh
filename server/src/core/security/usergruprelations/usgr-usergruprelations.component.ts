import { UserGrupRelationsModel } from "./models/usergruprelations.model";
import * as App from "../../../common/component";

class UsgrUserGrupRelationsComponent extends App.CommonComponent {
    constructor() {
        super();
        this.modelDb = UserGrupRelationsModel;
	    this.namePref = UserGrupRelationsModel.namePref;
	    this.name = UserGrupRelationsModel.name;
        this.keyName = UserGrupRelationsModel.keyName;
    }   
}
var usgrUserGrupRelationsComponent = new UsgrUserGrupRelationsComponent();
export {usgrUserGrupRelationsComponent};
export default usgrUserGrupRelationsComponent;
