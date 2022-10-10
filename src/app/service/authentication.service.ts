import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(usernameval: string, passwordval: string) {
    // console.log('1 : '+this.isUserLoggedIn())
    if (usernameval === 'aaaaa' && passwordval === 'aapp') {
      sessionStorage.setItem('authenticaterUser', usernameval)
      // console.log('3 : '+this.isUserLoggedIn())
      return true;
    }
    return false;
  }
  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticaterUser')
    return !(user===null)
  }
  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
