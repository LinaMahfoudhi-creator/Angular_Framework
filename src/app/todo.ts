import { Injectable, signal } from '@angular/core';
import { InterfaceTodo } from './InterfaceTodo';

@Injectable({
  providedIn: 'root', //Ce service 
})
export class TodoService {
  private todos = signal<InterfaceTodo[]>([]);
  private nextId = 1;

  readonly liste = this.todos.asReadonly();

  logTodos() {
    console.log(this.todos());
  }

  addTodo(name: string, content: string) {
    this.todos.update((list) => [...list, { id: this.nextId++, name, content }]);
    this.logTodos();
  }

  getTodos(): InterfaceTodo[] {
    return this.todos();
  }

  deleteTodo(id: number) {
    this.todos.update((list) => list.filter((t) => t.id !== id));
    this.logTodos();
  }
}