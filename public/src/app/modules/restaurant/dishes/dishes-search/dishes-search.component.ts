import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsSearchComponent } from '../../../../common/commons-search/commons-search.component';

import {default as config} from '../../config/config.json';
import { DishesService } from '../shared/dishes.service';

@Component({
  selector: 'app-' + config['dishes'].component.name.toLowerCase() + '-form',
  templateUrl: './dishes-search.component.html',
  styleUrls: ['./dishes-search.component.css']
})
export class DishesSearchComponent extends CommonsSearchComponent {
  
  constructor(router: Router, route: ActivatedRoute, dishesService: DishesService) 
  {
    super(router, route, dishesService);
    this.name = config['dishes'].component.name ;
	  this.pref = config['dishes'].component.prefix  ;
  }
}
