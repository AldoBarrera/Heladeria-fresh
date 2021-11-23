import { Component, Input } from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import {GroupsService} from "./shared/groups.service";

@Component({
  selector: 'app-' + config['groups'].component.name.toLowerCase() ,
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent extends CommonsComponent {

  @Input() datafromadd: any[] = [];
  constructor(private groupsService: GroupsService) { 
    super(groupsService);
    this.name = config['groups'].component.name  ;
	  this.pref = config['groups'].component.prefix  ;
	  this.keyName =  "_id";
  }
  ngOnInit() {    
    super.ngOnInit(); 
  }
}
