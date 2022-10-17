import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class HelloWorldBean{
  constructor(
    public meaasge:String
  ){}
}
@Injectable({
  providedIn: 'root'
})
export class HelloWService {

  constructor( private http: HttpClient) { }

  helloPrint(){
    console.log('inside helloPrint')
    this.http.get<HelloWorldBean>('http://localhost:8081/bean').subscribe(
      response=>console.log(response.meaasge)
    );
  }
}
