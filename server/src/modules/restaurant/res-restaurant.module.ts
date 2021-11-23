import express from 'express';
import * as App from "../../common/module";
import config from "./config/config.json";
import DishDishesComponent from "./dishes/dish-dishes.component" 
import OrdnOrderComponent from "./order/ordn-order.component" 
import OrddOrderDetailsComponent from "./orderdetails/ordd-orderdetails.component" 
import InveInventoryComponent from "./inventory/inve-inventory.component" 


import * as DishDishesRoute from "./dishes/routes/dish-dishes.route" 
import * as OrdnOrderRoute from "./order/routes/ordn-order.route" 
import * as OrddOrderDetailsRoute from "./orderdetails/routes/ordd-orderdetails.route" 
import * as InveInventoryRoute from "./inventory/routes/inve-inventory.route" 


class ResRestaurantModule extends App.CommonModule {

    constructor() {
      super();
      this.urlRelative = config["module"].urlRelative;
    }
    public async addRoutes(appExpress:express.Application, io?: any) {
      super.addRoutes(appExpress, io);  
      var dishDishesRoute = new DishDishesRoute.DishDishesRoute('dishes', io); 
      appExpress.use('/api/v1/restaurant', dishDishesRoute.router); 
      var ordnOrderRoute = new OrdnOrderRoute.OrdnOrderRoute('order', io); 
      appExpress.use('/api/v1/restaurant', ordnOrderRoute.router); 
      var orddOrderDetailsRoute = new OrddOrderDetailsRoute.OrddOrderDetailsRoute('orderDetails', io); 
      appExpress.use('/api/v1/restaurant', orddOrderDetailsRoute.router); 
      var inveInventoryRoute = new InveInventoryRoute.InveInventoryRoute('inventory', io); 
      appExpress.use('/api/v1/restaurant', inveInventoryRoute.router); 
 
      
    }
}


export {DishDishesComponent, OrdnOrderComponent, OrddOrderDetailsComponent, InveInventoryComponent,  ResRestaurantModule} ;

export default new ResRestaurantModule();
