import { DishesModel } from "./models/dishes.model";
import * as App from "../../../common/component";

class DishDishesComponent extends App.CommonComponent {
    constructor() {
        super();
        this.modelDb = DishesModel;
	    this.namePref = DishesModel.namePref;
	    this.name = DishesModel.name;
        this.keyName = DishesModel.keyName;
    }   
}
var dishDishesComponent = new DishDishesComponent();
export {dishDishesComponent};
export default dishDishesComponent;
