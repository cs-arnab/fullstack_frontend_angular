import { Component, OnInit } from '@angular/core';


export class Todo {
  constructor(
    public id:number,
    public description:string,
    public status:boolean,
    public targetDate:Date
  ) { }
}



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
   new Todo(1,'aa',false,new Date()),
   new Todo(2,'bb',false,new Date()),
   new Todo(3,'cc',false,new Date()),
   new Todo(4,'dd',false,new Date())
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
