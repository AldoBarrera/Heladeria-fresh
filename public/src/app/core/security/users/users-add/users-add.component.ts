import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsAddComponent } from '../../../../common/commons-add/commons-add.component';

import {default as config} from '../../config/config.json';

import { UsersService } from '../shared/users.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['users'].component.name.toLowerCase()  + '-addform',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css'],
  providers:  [FormsService]
})
export class UsersAddComponent extends CommonsAddComponent {

  constructor(router: Router, route: ActivatedRoute, usersService: UsersService, formsService: FormsService) 
  {    
    super(router, route, usersService, formsService);    
    this.name = config['users'].component.name;
	  this.pref = config['users'].component.prefix;
	  this.keyName = "_id";
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['users'].model;    
	  this.components = config;
    super.createForm();    
  }
}
