import { Component, inject } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.html',
})
export class ToastContainer {
  private toastService = inject(ToastService);
  toasts = this.toastService.toasts;

  close(id: number) {
    this.toastService.close(id);
  }
}