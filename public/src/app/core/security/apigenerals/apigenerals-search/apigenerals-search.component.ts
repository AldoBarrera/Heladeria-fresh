import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsSearchComponent } from '../../../../common/commons-search/commons-search.component';

import {default as config} from '../../config/config.json';
import { ApiGeneralsService } from '../shared/apigenerals.service';

@Component({
  selector: 'app-' + config['apiGenerals'].component.name.toLowerCase() + '-form',
  templateUrl: './apigenerals-search.component.html',
  styleUrls: ['./apigenerals-search.component.css']
})
export class ApiGeneralsSearchComponent extends CommonsSearchComponent {
  
  constructor(router: Router, route: ActivatedRoute, apiGeneralsService: ApiGeneralsService) 
  {
    super(router, route, apiGeneralsService);
    this.name = config['apiGenerals'].component.name ;
	  this.pref = config['apiGenerals'].component.prefix  ;
  }
}
