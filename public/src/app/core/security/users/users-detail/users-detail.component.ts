import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsDetailComponent } from '../../../../common/commons-detail/commons-detail.component';

import {default as config} from '../../config/config.json';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-' + config['users'].component.name.toLowerCase() + '-form',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent extends CommonsDetailComponent {
  
  constructor(router: Router, route: ActivatedRoute, usersService: UsersService) 
  {
    super(router, route, usersService);
    this.name = config['users'].component.name ;
	  this.pref = config['users'].component.prefix  ;
  }
}
