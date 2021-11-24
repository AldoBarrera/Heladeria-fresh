import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsSearchComponent } from '../../../../common/commons-search/commons-search.component';

import {default as config} from '../../config/config.json';
import { OrderDetailsService } from '../shared/orderdetails.service';

@Component({
  selector: 'app-' + config['orderDetails'].component.name.toLowerCase() + '-form',
  templateUrl: './orderdetails-search.component.html',
  styleUrls: ['./orderdetails-search.component.css']
})
export class OrderDetailsSearchComponent extends CommonsSearchComponent {
  
  constructor(router: Router, route: ActivatedRoute, orderDetailsService: OrderDetailsService) 
  {
    super(router, route, orderDetailsService);
    this.name = config['orderDetails'].component.name ;
	  this.pref = config['orderDetails'].component.prefix  ;
  }
}
