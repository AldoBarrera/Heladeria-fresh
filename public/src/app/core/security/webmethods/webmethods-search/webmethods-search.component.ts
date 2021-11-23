import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsSearchComponent } from '../../../../common/commons-search/commons-search.component';

import {default as config} from '../../config/config.json';
import { WebMethodsService } from '../shared/webmethods.service';

@Component({
  selector: 'app-' + config['webMethods'].component.name.toLowerCase() + '-form',
  templateUrl: './webmethods-search.component.html',
  styleUrls: ['./webmethods-search.component.css']
})
export class WebMethodsSearchComponent extends CommonsSearchComponent {
  
  constructor(router: Router, route: ActivatedRoute, webMethodsService: WebMethodsService) 
  {
    super(router, route, webMethodsService);
    this.name = config['webMethods'].component.name ;
	  this.pref = config['webMethods'].component.prefix  ;
  }
}
