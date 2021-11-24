import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsAddComponent } from '../../../common/commons-add/commons-add.component';

import {default as config} from '../config/config.json';

import { LoginService } from './shared/login.service';
import { FormsService } from '../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['login'].component.name.toLowerCase()  + '-addform',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:  [FormsService]
})
export class LoginComponent extends CommonsAddComponent {

  public router;
  constructor(router: Router, route: ActivatedRoute, loginService: LoginService, formsService: FormsService) 
  {    
    super(router, route, loginService, formsService);    
    this.name = config['login'].component.name;
	  this.pref = config['login'].component.prefix;
	  this.keyName = "_id";
	  this.components = config;
    this.router = router;
  }

  createForm() {
    this.controlsJson = config['login'].model;    
	  this.components = config;
    super.createForm();    
  }

  onCompleteSubmit(data) {

      if(data.user) {
        this.router.navigate(['/inventory'])
      } else {
        this.router.navigate(['/errorLogin'])
      }
    
  }  
}
