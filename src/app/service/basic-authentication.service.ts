import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN='token'
export const AUTHENTICATED_USER='authenticaterUser'
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  constructor(
    private http: HttpClient
  ) { }
  executeJWTBasicAuthenticationService(username: string, password: string) {
    return this.http.post<any>(`${API_URL}/authenticate`,
      {  
        username,
        password
      }).pipe(
        map(
          (data: any) => {
            console.log(' executeJWTBasicAuthenticationService in map ');
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
            return data;
          }
        ));
  }
  executeJWTBasicAuthenticationService_working(username: string, password: string) {
    return this.http.post<any>(
      `${API_URL}/authenticate`,{
        username,
        password
      }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );
  }
  executeBasicAuthenticationService(usernameval: string, passwordval: string) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(`${usernameval}:${passwordval}`);
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(`${API_URL}/auth/basicauth`,
      { headers }).pipe(
        map(
          (data: any) => {
            sessionStorage.setItem(AUTHENTICATED_USER, usernameval);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString)
            return data;
          }
        ));
  }
  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }
  getAuthenticatedToken() {
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem(TOKEN);
    }
    return null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }
  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }
  /*
  authenticate(usernameval: string, passwordval: string) {
    // console.log('1 : '+this.isUserLoggedIn())
    if (usernameval === 'aaaaa' && passwordval === 'aapp') {
      sessionStorage.setItem('authenticaterUser', usernameval)
      // console.log('3 : '+this.isUserLoggedIn())
      return true;
    }
    return false;
  }
  */
  /*
    createBasicAuthenticationHttpHeader() {
      let username = 'qqqq'
      let password = 'qqqq'
      // let basicAuthHeaderString='Basic '+window.btoa(username+':'+password);
      let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
      return basicAuthHeaderString;
    }
    */
}
export class AuthenticationBean {
  constructor(public message: string) { }
}