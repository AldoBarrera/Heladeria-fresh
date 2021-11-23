import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsSearchComponent } from '../../../../common/commons-search/commons-search.component';

import {default as config} from '../../config/config.json';
import { ApiSpecificsService } from '../shared/apispecifics.service';

@Component({
  selector: 'app-' + config['apiSpecifics'].component.name.toLowerCase() + '-form',
  templateUrl: './apispecifics-search.component.html',
  styleUrls: ['./apispecifics-search.component.css']
})
export class ApiSpecificsSearchComponent extends CommonsSearchComponent {
  
  constructor(router: Router, route: ActivatedRoute, apiSpecificsService: ApiSpecificsService) 
  {
    super(router, route, apiSpecificsService);
    this.name = config['apiSpecifics'].component.name ;
	  this.pref = config['apiSpecifics'].component.prefix  ;
  }
}
