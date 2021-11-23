import { Component  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsEditComponent } from '../../../../common/commons-edit/commons-edit.component';

import {default as config} from '../../config/config.json';


import { GrupApigPrivileguesService } from '../shared/grupapigprivilegues.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['grupApigPrivilegues'].component.name.toLowerCase()  + '-addform',
  templateUrl: './grupapigprivilegues-edit.component.html',
  styleUrls: ['./grupapigprivilegues-edit.component.css'],
  providers:  [FormsService]
})
export class GrupApigPrivileguesEditComponent extends CommonsEditComponent {
 
  constructor(router: Router, route: ActivatedRoute, grupApigPrivileguesService: GrupApigPrivileguesService, formsService: FormsService) 
  {    
    super(router, route, grupApigPrivileguesService, formsService);    
    this.name = config['grupApigPrivilegues'].component.name;
	  this.pref = config['grupApigPrivilegues'].component.prefix  ;
	  this.keyName = "_id"  ;
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['grupApigPrivilegues'].model;
	  this.components = config;
    super.createForm();  
  }
  
}
