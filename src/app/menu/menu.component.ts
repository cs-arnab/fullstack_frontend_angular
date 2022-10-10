import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // isUserLoggedIn:boolean=false;

  constructor(public authenticationService 
    : AuthenticationService) { }

  ngOnInit(): void {
    // this.isUserLoggedIn=this.authenticationService.isUserLoggedIn();
  }

}
