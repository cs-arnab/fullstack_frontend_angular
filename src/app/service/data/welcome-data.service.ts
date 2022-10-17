import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(
    public message: String
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }
  // http://localhost:8081/bean/
  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(`${API_URL}/bean`);
  }
  // http://localhost:8081/user/arnab
  executeHelloWorldBeanServiceWithPathVariable(name: any){
    /*
    let basicAuthHeaderString=this.createBasicAuthenticationHttpHeader();
    let headers =new HttpHeaders({
      Authorization:basicAuthHeaderString
    })

    return this.http.get<HelloWorldBean>(`http://localhost:8081/user/${name}`,
    {headers:headers});
        */
    return this.http.get<HelloWorldBean>(`${API_URL}/user/${name}`,);
  }
  /*
  createBasicAuthenticationHttpHeader(){
    let username='qqqq'
    let password='qqqq'
    // let basicAuthHeaderString='Basic '+window.btoa(username+':'+password);
    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
    return basicAuthHeaderString;
  }
  */
}
