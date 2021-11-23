import { Component  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsEditComponent } from '../../../../common/commons-edit/commons-edit.component';

import {default as config} from '../../config/config.json';


import { DishesService } from '../shared/dishes.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['dishes'].component.name.toLowerCase()  + '-addform',
  templateUrl: './dishes-edit.component.html',
  styleUrls: ['./dishes-edit.component.css'],
  providers:  [FormsService]
})
export class DishesEditComponent extends CommonsEditComponent {
 
  constructor(router: Router, route: ActivatedRoute, dishesService: DishesService, formsService: FormsService) 
  {    
    super(router, route, dishesService, formsService);    
    this.name = config['dishes'].component.name;
	  this.pref = config['dishes'].component.prefix  ;
	  this.keyName = "_id"  ;
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['dishes'].model;
	  this.components = config;
    super.createForm();  
  }
  
}
