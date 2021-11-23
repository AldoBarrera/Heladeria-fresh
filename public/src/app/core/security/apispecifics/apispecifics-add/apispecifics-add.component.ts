import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsAddComponent } from '../../../../common/commons-add/commons-add.component';

import {default as config} from '../../config/config.json';

import { ApiSpecificsService } from '../shared/apispecifics.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['apiSpecifics'].component.name.toLowerCase()  + '-addform',
  templateUrl: './apispecifics-add.component.html',
  styleUrls: ['./apispecifics-add.component.css'],
  providers:  [FormsService]
})
export class ApiSpecificsAddComponent extends CommonsAddComponent {

  constructor(router: Router, route: ActivatedRoute, apiSpecificsService: ApiSpecificsService, formsService: FormsService) 
  {    
    super(router, route, apiSpecificsService, formsService);    
    this.name = config['apiSpecifics'].component.name;
	  this.pref = config['apiSpecifics'].component.prefix;
	  this.keyName = "_id";
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['apiSpecifics'].model;    
	  this.components = config;
    super.createForm();    
  }
}
