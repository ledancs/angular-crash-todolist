import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service'

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo):void {
    // remove from the UI array
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // remove from the back-end
    this.todoService.deleteTodo(todo).subscribe(() => {
      
    });
  }

  toggleTodo(todo:Todo):void {
    // toggle in the UI
    this.todos = this.todos.map(t => {
      if (t.id === todo.id) {
        t.completed = !t.completed;
      }
      return t;
    });

    // update the back-end
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    });
  }

  addTodo(todo:Todo):void {
    this.todoService.addTodo(todo).subscribe(t => {
      this.todos.push(t);
    })
  }

}
