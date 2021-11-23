import { Component, Input } from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import {DishesPublicService} from "./shared/dishespublic.service";
import * as $ from 'jquery';
@Component({
  selector: 'app-' + config['dishes'].component.name.toLowerCase() + 'public' ,
  templateUrl: './dishespublic.component.html',
  styleUrls: ['./dishespublic.component.css']
})
export class DishesPublicComponent extends CommonsComponent {

  isLogged: boolean
  @Input() datafromadd: any[] = [];
  public inventory: any[] = [];
  public details: any[] = [];
  public availability: any = {};
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private dishesService: DishesPublicService) { 
    super(dishesService);
    this.name = 'dishespublic';
	  this.pref = 'disp';
	  this.keyName = "_id";
  }
  ngOnInit() {    
    super.ngOnInit();    
  }

  addElements (data: any[]) {
    if (this.data.length == 0)
     this.data.addElements(data);
    else {
     //this.data=CommonsArray.create();
     this.data.addElementsMissing(data);
    }
    this.calculateAvailabilityByInventory();
    this.calculateAvailability();
  }

  onCurrentDataChange(data) {
    this.currentData = JSON.parse(JSON.stringify(data));
  }

  onCompleteData(inventory) {
    this.inventory = inventory;
    this.calculateAvailabilityByInventory();
  }

  onCompleteDataDetails(details) {
    this.details = details;
    this.calculateAvailability();
  }

  calculateAvailabilityByInventory() {
    for (const product of this.data) {
      this.availability[product._id] = 0;
      for(const inventory of  this.inventory) {
        if(inventory.inve_dish_id._id == product._id) {
          this.availability[product._id] = inventory.inve_available;
        }           
      }
    }
}
  calculateAvailability() {
      for (const product of this.data) {
        let aux = 0;
        
        for(const details of this.details) {
          if(details.ordd_dish_id._id == product._id) {
            aux +=  details.ordd_count;
          }
        }
        this.availability[product._id] =  this.availability[product._id] - aux;
      }
  } 

  logout() {
  }

  login() {
  }

}
