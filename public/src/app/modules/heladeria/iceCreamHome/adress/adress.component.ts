import { Component, Input } from '@angular/core';
import {CommonsComponent} from "../../../../common/commons.component";
import {default as config} from '../../config/config.json';
import * as $ from 'jquery';
@Component({
  selector: 'app-' + config['dishes'].component.name.toLowerCase() + 'public' ,
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})
export class AdressComponent {
  isLogged: boolean
  @Input() datafromadd: any[] = [];
  public inventory: any[] = [];
  public details: any[] = [];
  public availability: any = {};
  images = ["./assets/img/b3.jpg", "./assets/img/b4.jpg", "./assets/img/b5.jpg", "./assets/img/b10.jpg", "./assets/img/b11.jpg"]; 
  public pageName: any = "direccion";
  public clickOfertasFunction = ()=> {
    this.pageName = "ofertas";
  }
  public clickHomeFunction = ()=> {
    this.pageName = "home";
  }
  public clickDireccionFunction = ()=> {
    this.pageName = "direccion";
  }
  public clickQuienesSomosFunction = () => {
    this.pageName = "quienesSomos";
  }
}
