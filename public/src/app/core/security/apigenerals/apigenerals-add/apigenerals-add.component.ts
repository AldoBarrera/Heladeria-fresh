import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsAddComponent } from '../../../../common/commons-add/commons-add.component';

import {default as config} from '../../config/config.json';

import { ApiGeneralsService } from '../shared/apigenerals.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['apiGenerals'].component.name.toLowerCase()  + '-addform',
  templateUrl: './apigenerals-add.component.html',
  styleUrls: ['./apigenerals-add.component.css'],
  providers:  [FormsService]
})
export class ApiGeneralsAddComponent extends CommonsAddComponent {

  constructor(router: Router, route: ActivatedRoute, apiGeneralsService: ApiGeneralsService, formsService: FormsService) 
  {    
    super(router, route, apiGeneralsService, formsService);    
    this.name = config['apiGenerals'].component.name;
	  this.pref = config['apiGenerals'].component.prefix;
	  this.keyName = "_id";
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['apiGenerals'].model;    
	  this.components = config;
    super.createForm();    
  }
}
