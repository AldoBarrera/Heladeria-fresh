import { Component  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsEditComponent } from '../../../../common/commons-edit/commons-edit.component';

import {default as config} from '../../config/config.json';


import { WebMethodsService } from '../shared/webmethods.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['webMethods'].component.name.toLowerCase()  + '-addform',
  templateUrl: './webmethods-edit.component.html',
  styleUrls: ['./webmethods-edit.component.css'],
  providers:  [FormsService]
})
export class WebMethodsEditComponent extends CommonsEditComponent {
 
  constructor(router: Router, route: ActivatedRoute, webMethodsService: WebMethodsService, formsService: FormsService) 
  {    
    super(router, route, webMethodsService, formsService);    
    this.name = config['webMethods'].component.name;
	  this.pref = config['webMethods'].component.prefix  ;
	  this.keyName = "_id"  ;
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['webMethods'].model;
	  this.components = config;
    super.createForm();  
  }
  
}
