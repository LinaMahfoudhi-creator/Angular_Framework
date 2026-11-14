import { Component, input } from '@angular/core';
import { TodoService } from '../todo';
import { TodoForm } from '../todo-form/todo-form';
import { TodoList } from '../todo-list/todo-list';

@Component({
  selector: 'app-todo-day',
  imports: [TodoForm, TodoList],
  providers: [TodoService],
  templateUrl: './todo-day.html',
})
export class TodoDay {
  titre = input('');
}