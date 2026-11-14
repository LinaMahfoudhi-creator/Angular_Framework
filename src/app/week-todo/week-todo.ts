import { Component } from '@angular/core';
import { TodoDay } from '../todo-day/todo-day';

@Component({
  selector: 'app-week-todo',
  imports: [TodoDay],
  templateUrl: './week-todo.html',
})
export class WeekTodo {
  jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
}