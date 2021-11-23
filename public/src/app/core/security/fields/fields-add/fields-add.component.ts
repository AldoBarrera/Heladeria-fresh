import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsAddComponent } from '../../../../common/commons-add/commons-add.component';

import {default as config} from '../../config/config.json';

import { FieldsService } from '../shared/fields.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['fields'].component.name.toLowerCase()  + '-addform',
  templateUrl: './fields-add.component.html',
  styleUrls: ['./fields-add.component.css'],
  providers:  [FormsService]
})
export class FieldsAddComponent extends CommonsAddComponent {

  constructor(router: Router, route: ActivatedRoute, fieldsService: FieldsService, formsService: FormsService) 
  {    
    super(router, route, fieldsService, formsService);    
    this.name = config['fields'].component.name;
	  this.pref = config['fields'].component.prefix;
	  this.keyName = "_id";
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['fields'].model;    
	  this.components = config;
    super.createForm();    
  }
}
