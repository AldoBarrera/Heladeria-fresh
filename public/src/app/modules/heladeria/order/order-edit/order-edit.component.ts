import { Component  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsEditComponent } from '../../../../common/commons-edit/commons-edit.component';

import {default as config} from '../../config/config.json';


import { OrderService } from '../shared/order.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['order'].component.name.toLowerCase()  + '-addform',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css'],
  providers:  [FormsService]
})
export class OrderEditComponent extends CommonsEditComponent {
 
  constructor(router: Router, route: ActivatedRoute, orderService: OrderService, formsService: FormsService) 
  {    
    super(router, route, orderService, formsService);    
    this.name = config['order'].component.name;
	  this.pref = config['order'].component.prefix  ;
	  this.keyName = "_id"  ;
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['order'].model;
	  this.components = config;
    super.createForm();  
  }
  
}
