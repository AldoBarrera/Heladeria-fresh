import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsDetailComponent } from '../../../../common/commons-detail/commons-detail.component';

import {default as config} from '../../config/config.json';
import { ApiSpecificsService } from '../shared/apispecifics.service';

@Component({
  selector: 'app-' + config['apiSpecifics'].component.name.toLowerCase() + '-form',
  templateUrl: './apispecifics-detail.component.html',
  styleUrls: ['./apispecifics-detail.component.css']
})
export class ApiSpecificsDetailComponent extends CommonsDetailComponent {
  
  constructor(router: Router, route: ActivatedRoute, apiSpecificsService: ApiSpecificsService) 
  {
    super(router, route, apiSpecificsService);
    this.name = config['apiSpecifics'].component.name ;
	  this.pref = config['apiSpecifics'].component.prefix  ;
  }
}
