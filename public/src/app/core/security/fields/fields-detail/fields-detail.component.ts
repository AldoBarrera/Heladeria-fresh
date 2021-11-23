import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsDetailComponent } from '../../../../common/commons-detail/commons-detail.component';

import {default as config} from '../../config/config.json';
import { FieldsService } from '../shared/fields.service';

@Component({
  selector: 'app-' + config['fields'].component.name.toLowerCase() + '-form',
  templateUrl: './fields-detail.component.html',
  styleUrls: ['./fields-detail.component.css']
})
export class FieldsDetailComponent extends CommonsDetailComponent {
  
  constructor(router: Router, route: ActivatedRoute, fieldsService: FieldsService) 
  {
    super(router, route, fieldsService);
    this.name = config['fields'].component.name ;
	  this.pref = config['fields'].component.prefix  ;
  }
}
