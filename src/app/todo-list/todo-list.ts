import { Component, inject } from '@angular/core';
import { TodoService } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.html',
  standalone: true,
  styleUrl: './todo-list.css',
})
export class TodoList {
  private todoService = inject(TodoService);

  todos = this.todoService.liste;

  delete(id: number) {
    this.todoService.deleteTodo(id);
  }
}