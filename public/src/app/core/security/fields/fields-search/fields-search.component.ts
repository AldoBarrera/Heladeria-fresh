import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsSearchComponent } from '../../../../common/commons-search/commons-search.component';

import {default as config} from '../../config/config.json';
import { FieldsService } from '../shared/fields.service';

@Component({
  selector: 'app-' + config['fields'].component.name.toLowerCase() + '-form',
  templateUrl: './fields-search.component.html',
  styleUrls: ['./fields-search.component.css']
})
export class FieldsSearchComponent extends CommonsSearchComponent {
  
  constructor(router: Router, route: ActivatedRoute, fieldsService: FieldsService) 
  {
    super(router, route, fieldsService);
    this.name = config['fields'].component.name ;
	  this.pref = config['fields'].component.prefix  ;
  }
}
