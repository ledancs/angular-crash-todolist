import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5';

  constructor(private httpClient:HttpClient) { }

  // get todos
  getTodos():Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // toggle completed
  toggleCompleted(todo:Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.httpClient.put<Todo>(url, todo, httpOptions);
  }

  // delete from the back-end
  deleteTodo(todo:Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.httpClient.delete<Todo>(url, httpOptions);
  }

  // add todo
  addTodo(todo:Todo):Observable<Todo> {
    return this.httpClient.post<Todo>(this.todosUrl, todo, httpOptions);
  }
}
