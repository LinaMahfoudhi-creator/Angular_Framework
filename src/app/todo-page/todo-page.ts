import { Component } from '@angular/core';
import { TodoList } from '../todo-list/todo-list';
import { TodoForm } from '../todo-form/todo-form';

@Component({
  selector: 'app-todo-page',
  imports: [TodoList, TodoForm],
  templateUrl: './todo-page.html',
  styleUrl: './todo-page.css',
})
export class TodoPage {}