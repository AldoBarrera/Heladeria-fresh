import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsSearchComponent } from '../../../../common/commons-search/commons-search.component';

import {default as config} from '../../config/config.json';
import { InventoryService } from '../shared/inventory.service';

@Component({
  selector: 'app-' + config['inventory'].component.name.toLowerCase() + '-form',
  templateUrl: './inventory-search.component.html',
  styleUrls: ['./inventory-search.component.css']
})
export class InventorySearchComponent extends CommonsSearchComponent {
  
  constructor(router: Router, route: ActivatedRoute, inventoryService: InventoryService) 
  {
    super(router, route, inventoryService);
    this.name = config['inventory'].component.name ;
	  this.pref = config['inventory'].component.prefix  ;
  }
}
