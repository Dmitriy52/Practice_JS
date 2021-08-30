import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

   todos:Todo[];
   
   inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ]
  }

  toggleDone (id:number) {
    this.todos.map((elem, indx)=> {
      if (indx == id) elem.completed = !elem.completed;
      return elem;
    }) 
  }

  deleteTodo(id:number) {
    this.todos = this.todos.filter((elem, indx) => indx !== id);
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }

}
