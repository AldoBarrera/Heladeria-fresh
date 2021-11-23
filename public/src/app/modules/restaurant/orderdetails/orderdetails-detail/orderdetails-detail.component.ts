import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsDetailComponent } from '../../../../common/commons-detail/commons-detail.component';

import {default as config} from '../../config/config.json';
import { OrderDetailsService } from '../shared/orderdetails.service';

@Component({
  selector: 'app-' + config['orderDetails'].component.name.toLowerCase() + '-form',
  templateUrl: './orderdetails-detail.component.html',
  styleUrls: ['./orderdetails-detail.component.css']
})
export class OrderDetailsDetailComponent extends CommonsDetailComponent {
  
  constructor(router: Router, route: ActivatedRoute, orderDetailsService: OrderDetailsService) 
  {
    super(router, route, orderDetailsService);
    this.name = config['orderDetails'].component.name ;
	  this.pref = config['orderDetails'].component.prefix  ;
  }
}
