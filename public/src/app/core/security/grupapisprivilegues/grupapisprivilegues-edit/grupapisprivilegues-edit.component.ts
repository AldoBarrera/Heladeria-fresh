import { Component  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsEditComponent } from '../../../../common/commons-edit/commons-edit.component';

import {default as config} from '../../config/config.json';


import { GrupApisPrivileguesService } from '../shared/grupapisprivilegues.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['grupApisPrivilegues'].component.name.toLowerCase()  + '-addform',
  templateUrl: './grupapisprivilegues-edit.component.html',
  styleUrls: ['./grupapisprivilegues-edit.component.css'],
  providers:  [FormsService]
})
export class GrupApisPrivileguesEditComponent extends CommonsEditComponent {
 
  constructor(router: Router, route: ActivatedRoute, grupApisPrivileguesService: GrupApisPrivileguesService, formsService: FormsService) 
  {    
    super(router, route, grupApisPrivileguesService, formsService);    
    this.name = config['grupApisPrivilegues'].component.name;
	  this.pref = config['grupApisPrivilegues'].component.prefix  ;
	  this.keyName = "_id"  ;
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['grupApisPrivilegues'].model;
	  this.components = config;
    super.createForm();  
  }
  
}
