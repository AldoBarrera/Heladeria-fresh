import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsAddComponent } from '../../../../common/commons-add/commons-add.component';

import {default as config} from '../../config/config.json';

import { InventoryService } from '../shared/inventory.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['inventory'].component.name.toLowerCase()  + '-addform',
  templateUrl: './inventory-add.component.html',
  styleUrls: ['./inventory-add.component.css'],
  providers:  [FormsService]
})
export class InventoryAddComponent extends CommonsAddComponent {

  constructor(router: Router, route: ActivatedRoute, inventoryService: InventoryService, formsService: FormsService) 
  {    
    super(router, route, inventoryService, formsService);    
    this.name = config['inventory'].component.name;
	  this.pref = config['inventory'].component.prefix;
	  this.keyName = "_id";
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['inventory'].model;    
	  this.components = config;
    super.createForm();    
  }
}
