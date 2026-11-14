import { Component } from '@angular/core';
import { CvPage } from './cv-page/cv-page';
import { ToastContainer } from './toast-container/toast-container';

@Component({
  selector: 'app-root',
  imports: [CvPage, ToastContainer],
  templateUrl: './app.html',
})
export class App {}