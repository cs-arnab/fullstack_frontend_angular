import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

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
    private authenticationService:AuthenticationService,
    private basicAuthenticationService:BasicAuthenticationService
    ) { }

  ngOnInit(): void {
  }
  /*
  // hard code login, remove '_notused' it will work
  handleLogin(){
    if(this.authenticationService.authenticate(this.usernameval,this.passwordval)){
      this.router.navigate(['welcome',this.usernameval])
      this.invalidLogin=false
    }else {
      this.invalidLogin=true
    }
  }
  */
  // basic authentication
  handleBasicAuthLogin(){
    this.basicAuthenticationService.executeBasicAuthenticationService(this.usernameval,this.passwordval).subscribe(
      data=>{
        console.log('data : '+data);
        this.router.navigate(['welcome',this.usernameval]);
        this.invalidLogin=false;
      },
      error=>{
        console.log('error :'+error);
        this.invalidLogin=true
      }
    )
  }
    // JWT authentication
    handleJWTAuthLogin(){
      this.basicAuthenticationService.executeJWTBasicAuthenticationService(this.usernameval,this.passwordval).subscribe(
        data=>{
          this.router.navigate(['welcome',this.usernameval]);
          this.invalidLogin=false;
        },
        error=>{
          this.invalidLogin=true
        }
      )
    }

}
