import { Component, Input } from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import {UsersService} from "./shared/users.service";

@Component({
  selector: 'app-' + config['users'].component.name.toLowerCase() ,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent extends CommonsComponent {

  @Input() datafromadd: any[] = [];
  constructor(private usersService: UsersService) { 
    super(usersService);
    this.name = config['users'].component.name  ;
	  this.pref = config['users'].component.prefix  ;
	  this.keyName =  "_id";
  }
  ngOnInit() {    
    super.ngOnInit(); 
  }
}
