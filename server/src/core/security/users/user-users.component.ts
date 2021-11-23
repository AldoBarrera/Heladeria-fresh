import { UsersModel } from "./models/users.model";
import * as App from "../../../common/component";

class UserUsersComponent extends App.CommonComponent {
    constructor() {
        super();
        this.modelDb = UsersModel;
	    this.namePref = UsersModel.namePref;
	    this.name = UsersModel.name;
        this.keyName = UsersModel.keyName;
    }   
}
var userUsersComponent = new UserUsersComponent();
export {userUsersComponent};
export default userUsersComponent;
