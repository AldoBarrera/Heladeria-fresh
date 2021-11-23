import { Component  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsEditComponent } from '../../../../common/commons-edit/commons-edit.component';

import {default as config} from '../../config/config.json';


import { UsersService } from '../shared/users.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['users'].component.name.toLowerCase()  + '-addform',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css'],
  providers:  [FormsService]
})
export class UsersEditComponent extends CommonsEditComponent {
 
  constructor(router: Router, route: ActivatedRoute, usersService: UsersService, formsService: FormsService) 
  {    
    super(router, route, usersService, formsService);    
    this.name = config['users'].component.name;
	  this.pref = config['users'].component.prefix  ;
	  this.keyName = "_id"  ;
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['users'].model;
	  this.components = config;
    super.createForm();  
  }
  
}
