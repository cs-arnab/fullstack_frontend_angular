import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  title = 'project 1';
  title1 = "project 2";
  title2:string= "project 3";
  constructor() { }

  ngOnInit(): void { 
    console.log(this.title)
    console.log(this.title1)
  }

}
