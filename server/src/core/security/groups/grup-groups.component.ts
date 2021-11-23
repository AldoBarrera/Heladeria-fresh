import { GroupsModel } from "./models/groups.model";
import * as App from "../../../common/component";

class GrupGroupsComponent extends App.CommonComponent {
    constructor() {
        super();
        this.modelDb = GroupsModel;
	    this.namePref = GroupsModel.namePref;
	    this.name = GroupsModel.name;
        this.keyName = GroupsModel.keyName;
    }   
}
var grupGroupsComponent = new GrupGroupsComponent();
export {grupGroupsComponent};
export default grupGroupsComponent;
