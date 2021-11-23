import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsDetailComponent } from '../../../../common/commons-detail/commons-detail.component';

import {default as config} from '../../config/config.json';
import { WebMethodsService } from '../shared/webmethods.service';

@Component({
  selector: 'app-' + config['webMethods'].component.name.toLowerCase() + '-form',
  templateUrl: './webmethods-detail.component.html',
  styleUrls: ['./webmethods-detail.component.css']
})
export class WebMethodsDetailComponent extends CommonsDetailComponent {
  
  constructor(router: Router, route: ActivatedRoute, webMethodsService: WebMethodsService) 
  {
    super(router, route, webMethodsService);
    this.name = config['webMethods'].component.name ;
	  this.pref = config['webMethods'].component.prefix  ;
  }
}
