import { Component  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsEditComponent } from '../../../../common/commons-edit/commons-edit.component';

import {default as config} from '../../config/config.json';


import { GrupFieldsPrivileguesService } from '../shared/grupfieldsprivilegues.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['grupFieldsPrivilegues'].component.name.toLowerCase()  + '-addform',
  templateUrl: './grupfieldsprivilegues-edit.component.html',
  styleUrls: ['./grupfieldsprivilegues-edit.component.css'],
  providers:  [FormsService]
})
export class GrupFieldsPrivileguesEditComponent extends CommonsEditComponent {
 
  constructor(router: Router, route: ActivatedRoute, grupFieldsPrivileguesService: GrupFieldsPrivileguesService, formsService: FormsService) 
  {    
    super(router, route, grupFieldsPrivileguesService, formsService);    
    this.name = config['grupFieldsPrivilegues'].component.name;
	  this.pref = config['grupFieldsPrivilegues'].component.prefix  ;
	  this.keyName = "_id"  ;
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['grupFieldsPrivilegues'].model;
	  this.components = config;
    super.createForm();  
  }
  
}
