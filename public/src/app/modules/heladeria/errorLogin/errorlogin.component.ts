import { Component, Input } from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import * as $ from 'jquery';
@Component({
  selector: 'app-' + config['dishes'].component.name.toLowerCase() + 'public' ,
  templateUrl: './errorlogin.component.html',
  styleUrls: ['./errorlogin.component.css']
})
export class ErrorloginComponent {
  isLogged: boolean
  @Input() datafromadd: any[] = [];
  public inventory: any[] = [];
  public details: any[] = [];
  public availability: any = {};
}
