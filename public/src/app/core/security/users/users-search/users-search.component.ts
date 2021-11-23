import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsSearchComponent } from '../../../../common/commons-search/commons-search.component';

import {default as config} from '../../config/config.json';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-' + config['users'].component.name.toLowerCase() + '-form',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.css']
})
export class UsersSearchComponent extends CommonsSearchComponent {
  
  constructor(router: Router, route: ActivatedRoute, usersService: UsersService) 
  {
    super(router, route, usersService);
    this.name = config['users'].component.name ;
	  this.pref = config['users'].component.prefix  ;
  }
}
