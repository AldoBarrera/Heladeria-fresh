import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nav-barrestaurant',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarRestaurantComponent implements OnInit {
  isLogged: boolean
  constructor() { }

  ngOnInit() {    
  }

  logout() {
  }

  login() {
  }

}
