import { Component  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsEditComponent } from '../../../../common/commons-edit/commons-edit.component';

import {default as config} from '../../config/config.json';


import { InventoryService } from '../shared/inventory.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['inventory'].component.name.toLowerCase()  + '-addform',
  templateUrl: './inventory-edit.component.html',
  styleUrls: ['./inventory-edit.component.css'],
  providers:  [FormsService]
})
export class InventoryEditComponent extends CommonsEditComponent {
 
  constructor(router: Router, route: ActivatedRoute, inventoryService: InventoryService, formsService: FormsService) 
  {    
    super(router, route, inventoryService, formsService);    
    this.name = config['inventory'].component.name;
	  this.pref = config['inventory'].component.prefix  ;
	  this.keyName = "_id"  ;
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['inventory'].model;
	  this.components = config;
    super.createForm();  
  }
  
}
