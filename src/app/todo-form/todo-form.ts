import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.html',
  standalone: true,
  styleUrl: './todo-form.css',
})
export class TodoForm {
  private todoService = inject(TodoService);

  name = signal('');
  content = signal('');

  add() {
    if (!this.name().trim()) return;
    this.todoService.addTodo(this.name(), this.content());
    this.name.set('');
    this.content.set('');
  }
}