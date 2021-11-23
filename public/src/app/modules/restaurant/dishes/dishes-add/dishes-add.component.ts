import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsAddComponent } from '../../../../common/commons-add/commons-add.component';

import {default as config} from '../../config/config.json';

import { DishesService } from '../shared/dishes.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['dishes'].component.name.toLowerCase()  + '-addform',
  templateUrl: './dishes-add.component.html',
  styleUrls: ['./dishes-add.component.css'],
  providers:  [FormsService]
})
export class DishesAddComponent extends CommonsAddComponent {

  constructor(router: Router, route: ActivatedRoute, dishesService: DishesService, formsService: FormsService) 
  {    
    super(router, route, dishesService, formsService);    
    this.name = config['dishes'].component.name;
	  this.pref = config['dishes'].component.prefix;
	  this.keyName = "_id";
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['dishes'].model;    
	  this.components = config;
    super.createForm();    
  }
}
