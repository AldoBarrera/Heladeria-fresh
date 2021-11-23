import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsDetailComponent } from '../../../../common/commons-detail/commons-detail.component';

import {default as config} from '../../config/config.json';
import { ApiGeneralsService } from '../shared/apigenerals.service';

@Component({
  selector: 'app-' + config['apiGenerals'].component.name.toLowerCase() + '-form',
  templateUrl: './apigenerals-detail.component.html',
  styleUrls: ['./apigenerals-detail.component.css']
})
export class ApiGeneralsDetailComponent extends CommonsDetailComponent {
  
  constructor(router: Router, route: ActivatedRoute, apiGeneralsService: ApiGeneralsService) 
  {
    super(router, route, apiGeneralsService);
    this.name = config['apiGenerals'].component.name ;
	  this.pref = config['apiGenerals'].component.prefix  ;
  }
}
