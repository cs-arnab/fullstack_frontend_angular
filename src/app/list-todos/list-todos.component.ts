import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';


export class Todo {
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ) { }
}



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]=[];
  // todos = [
  //  new Todo(1,'aa',false,new Date()),
  //  new Todo(2,'bb',false,new Date()),
  //  new Todo(3,'cc',false,new Date()),
  //  new Todo(4,'dd',false,new Date()),
  //  new Todo(5,'dddgdg',false,new Date())
  // ]
  message: any;
  constructor(
    private todoDataService:TodoDataService,
    private router:Router
  ) { }

  ngOnInit(): void {
this.refreshTodos();
  }
  refreshTodos(){
    this.todoDataService.retrieveAllTodos('abcd').subscribe(
      response=>{
        // console.log(response)
        this.todos=response;
      }
  )
  }
  deleteTodo(id: any){
    console.log(`Delete todo : ${id}`);
    this.todoDataService.deleteTodo('arnab',id).subscribe(
      response=>{
        // console.log(response);
        this.message=`Delete Todo Successful, Todo Id : ${id}`;
        this.refreshTodos();
      }
    )
  }
  updateTodo(id: any){
    // console.log(`Update todo : ${id}`);
    this.router.navigate(['todos',id]);
  }
  addTodo(){
    //  console.log(`create todo . . `);
     this.router.navigate(['todos',-1]);
  }
}






