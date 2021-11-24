import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsAddComponent } from '../../../../common/commons-add/commons-add.component';

import {default as config} from '../../config/config.json';

import { OrderDetailsService } from '../shared/orderdetails.service';
import { InventoryService } from '../../inventory/shared/inventory.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['orderDetails'].component.name.toLowerCase()  + '-addform2modal',
  templateUrl: './orderdetails-addmodal.component.html',
  styleUrls: ['./orderdetails-addmodal.component.css'],
  providers:  [FormsService]
})
export class OrderDetailsAddModalComponent extends CommonsAddComponent {

  forms : any = [];
  @Input() product: any = {};
  @Input() order: any = {};
  @Input() availability: number = 0;
  constructor(router: Router, route: ActivatedRoute, protected orderDetailsService: OrderDetailsService, protected inventoryService: InventoryService, formsService: FormsService) 
  {    
    super(router, route, orderDetailsService, formsService);    
    this.name = config['orderDetails'].component.name;
	  this.pref = config['orderDetails'].component.prefix;
	  this.keyName = "_id";
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['orderDetails'].model; 
    let date = new Date();
    date.setHours(0,0,0,0)  
    this.controlsJson[5].value = date.toISOString().substr(0, 10);
    //this.controlsJson[5].readonly = true;
    //this.controlsJson[5].type = 'text'; 

    //this.controlsJson[2].readonly = true;
    //this.controlsJson[2].control = "textbox";
    //this.controlsJson[4].readonly = true;
	  this.components = config;

    super.createForm();    
  }
  refresh() {
    this.controlsJson = config['orderDetails'].model;    
    let date = new Date();
    date.setHours(0,0,0,0)  
    this.controlsJson[5].value = date.toISOString().substr(0, 10);
    //this.controlsJson[5].readonly = true;

    this.controlsJson[2].value = this.product._id;
    //this.controlsJson[2].readonly = true;
    //this.controlsJson[2].control = "textbox";

    this.controlsJson[4].value =  this.order._id;
    //this.controlsJson[4].readonly = true;

    this.controlsJson[3].value =  1;
	  this.components = config;
    super.updateForm(); 
    this.forms.controls["ordd_date"].setValue( date.toISOString().substr(0, 10));
    this.forms.controls["ordd_dish_id"].setValue( this.product._id);   
    this.forms.controls["ordd_ordn_id"].setValue( this.order._id);   
    this.forms.controls["ordd_count"].setValue(1);   

    console.log(this.inventoryService.data);
    console.log(this.orderDetailsService.data);
    
  }

  checkAvailability() {
    this.calculateAvailabilityByInventory();
    this.calculateAvailability();
    return this.availability;
  }

  calculateAvailabilityByInventory() {
    
      this.availability = 0;
      for(const inventory of  this.inventoryService.data) {
        if(inventory.inve_dish_id._id == this.product._id) {
          this.availability = inventory.inve_available;
        }           
      }
    
}
  calculateAvailability() {
      
        let aux = 0;
        
        for(const details of this.orderDetailsService.data) {
          if(details.ordd_dish_id._id == this.product._id) {
            aux +=  details.ordd_count;
          }
        }
        this.availability =  this.availability - aux;
      
  } 

  hasAvailability() {
    return this.availability > 0 ? true : false;
  }

  onCompleteForm(form) {
    this.forms = form;
  }
}
