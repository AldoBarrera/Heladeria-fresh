import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsAddComponent } from '../../../../common/commons-add/commons-add.component';

import {default as config} from '../../config/config.json';

import { OrderDetailsService } from '../shared/orderdetails.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['orderDetails'].component.name.toLowerCase()  + '-addform2',
  templateUrl: './orderdetails-add.component.html',
  styleUrls: ['./orderdetails-add.component.css'],
  providers:  [FormsService]
})
export class OrderDetailsAddComponent extends CommonsAddComponent {

  constructor(router: Router, route: ActivatedRoute, orderDetailsService: OrderDetailsService, formsService: FormsService) 
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
	  this.components = config;

    super.createForm();    
  }
  refresh() {
    this.controlsJson = config['orderDetails'].model;    
	  this.components = config;
    super.updateForm();    
  }
}
