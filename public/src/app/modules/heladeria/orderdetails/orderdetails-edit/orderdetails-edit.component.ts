import { Component  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsEditComponent } from '../../../../common/commons-edit/commons-edit.component';

import {default as config} from '../../config/config.json';


import { OrderDetailsService } from '../shared/orderdetails.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['orderDetails'].component.name.toLowerCase()  + '-addform',
  templateUrl: './orderdetails-edit.component.html',
  styleUrls: ['./orderdetails-edit.component.css'],
  providers:  [FormsService]
})
export class OrderDetailsEditComponent extends CommonsEditComponent {
 
  constructor(router: Router, route: ActivatedRoute, orderDetailsService: OrderDetailsService, formsService: FormsService) 
  {    
    super(router, route, orderDetailsService, formsService);    
    this.name = config['orderDetails'].component.name;
	  this.pref = config['orderDetails'].component.prefix  ;
	  this.keyName = "_id"  ;
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['orderDetails'].model;
	  this.components = config;
    super.createForm();  
  }
  
}
