import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsAddComponent } from '../../../../common/commons-add/commons-add.component';

import {default as config} from '../../config/config.json';

import { WebMethodsService } from '../shared/webmethods.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['webMethods'].component.name.toLowerCase()  + '-addform',
  templateUrl: './webmethods-add.component.html',
  styleUrls: ['./webmethods-add.component.css'],
  providers:  [FormsService]
})
export class WebMethodsAddComponent extends CommonsAddComponent {

  constructor(router: Router, route: ActivatedRoute, webMethodsService: WebMethodsService, formsService: FormsService) 
  {    
    super(router, route, webMethodsService, formsService);    
    this.name = config['webMethods'].component.name;
	  this.pref = config['webMethods'].component.prefix;
	  this.keyName = "_id";
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['webMethods'].model;    
	  this.components = config;
    super.createForm();    
  }
}
