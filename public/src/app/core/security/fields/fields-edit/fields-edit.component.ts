import { Component  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsEditComponent } from '../../../../common/commons-edit/commons-edit.component';

import {default as config} from '../../config/config.json';


import { FieldsService } from '../shared/fields.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['fields'].component.name.toLowerCase()  + '-addform',
  templateUrl: './fields-edit.component.html',
  styleUrls: ['./fields-edit.component.css'],
  providers:  [FormsService]
})
export class FieldsEditComponent extends CommonsEditComponent {
 
  constructor(router: Router, route: ActivatedRoute, fieldsService: FieldsService, formsService: FormsService) 
  {    
    super(router, route, fieldsService, formsService);    
    this.name = config['fields'].component.name;
	  this.pref = config['fields'].component.prefix  ;
	  this.keyName = "_id"  ;
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['fields'].model;
	  this.components = config;
    super.createForm();  
  }
  
}
