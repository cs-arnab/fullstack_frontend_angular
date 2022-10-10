import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameval='aaa'
  passwordval=''
  invalidLogin=false
  constructor(private router:Router,
    private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }
  handleLogin(){
    if(this.authenticationService.authenticate(this.usernameval,this.passwordval)){
      this.router.navigate(['welcome',this.usernameval])
      this.invalidLogin=false
    }else {
      this.invalidLogin=true
    }
  }

}
