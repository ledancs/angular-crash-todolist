import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }


  setCssClass():object {
      const classes = {
        todo: true,
        completed: this.todo.completed
      }
      return classes;
  }

  onToggle(todo:Todo):void {
    this.toggleTodo.emit(todo);
  }

  onDelete(todo:Todo):void {
    this.deleteTodo.emit(todo);
  }

}
