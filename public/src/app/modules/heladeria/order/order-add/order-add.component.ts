import { Component, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsAddComponent } from '../../../../common/commons-add/commons-add.component';

import {default as config} from '../../config/config.json';

import { OrderService } from '../shared/order.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['order'].component.name.toLowerCase()  + '-addform2',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css'],
  providers:  [FormsService]
})
export class OrderAddComponent extends CommonsAddComponent {

  constructor(router: Router, route: ActivatedRoute, orderService: OrderService, formsService: FormsService) 
  {    
    super(router, route, orderService, formsService);    
    this.name = config['order'].component.name;
	  this.pref = config['order'].component.prefix;
	  this.keyName = "_id";
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['order'].model;  
    let date = new Date();
    date.setHours(0,0,0,0)  
    this.controlsJson[3].value = date.toISOString().substr(0, 10);
    //this.controlsJson[3].readonly = true;
	  this.components = config;
    super.createForm();    
  }
}
