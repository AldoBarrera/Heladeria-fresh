import { Component  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsEditComponent } from '../../../../common/commons-edit/commons-edit.component';

import {default as config} from '../../config/config.json';


import { ApiGeneralsService } from '../shared/apigenerals.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['apiGenerals'].component.name.toLowerCase()  + '-addform',
  templateUrl: './apigenerals-edit.component.html',
  styleUrls: ['./apigenerals-edit.component.css'],
  providers:  [FormsService]
})
export class ApiGeneralsEditComponent extends CommonsEditComponent {
 
  constructor(router: Router, route: ActivatedRoute, apiGeneralsService: ApiGeneralsService, formsService: FormsService) 
  {    
    super(router, route, apiGeneralsService, formsService);    
    this.name = config['apiGenerals'].component.name;
	  this.pref = config['apiGenerals'].component.prefix  ;
	  this.keyName = "_id"  ;
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['apiGenerals'].model;
	  this.components = config;
    super.createForm();  
  }
  
}
