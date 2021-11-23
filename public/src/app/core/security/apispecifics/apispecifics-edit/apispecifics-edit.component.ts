import { Component  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsEditComponent } from '../../../../common/commons-edit/commons-edit.component';

import {default as config} from '../../config/config.json';


import { ApiSpecificsService } from '../shared/apispecifics.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['apiSpecifics'].component.name.toLowerCase()  + '-addform',
  templateUrl: './apispecifics-edit.component.html',
  styleUrls: ['./apispecifics-edit.component.css'],
  providers:  [FormsService]
})
export class ApiSpecificsEditComponent extends CommonsEditComponent {
 
  constructor(router: Router, route: ActivatedRoute, apiSpecificsService: ApiSpecificsService, formsService: FormsService) 
  {    
    super(router, route, apiSpecificsService, formsService);    
    this.name = config['apiSpecifics'].component.name;
	  this.pref = config['apiSpecifics'].component.prefix  ;
	  this.keyName = "_id"  ;
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['apiSpecifics'].model;
	  this.components = config;
    super.createForm();  
  }
  
}
