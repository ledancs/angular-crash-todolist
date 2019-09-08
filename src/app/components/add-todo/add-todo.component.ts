import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  title:string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit():void {
    const todo = new Todo();
    todo.title = this.title;
    todo.completed = false;
    this.addTodo.emit(todo);
    this.title = '';
  }
}
