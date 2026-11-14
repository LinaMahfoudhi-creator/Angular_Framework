import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'warning' | 'danger';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private nextId = 1;
  private toastsSignal = signal<Toast[]>([]);
  readonly toasts = this.toastsSignal.asReadonly();

  show(message: string, type: ToastType = 'success', duree = 4000) {
    const id = this.nextId++;
    this.toastsSignal.update((l) => [...l, { id, message, type }]);
    setTimeout(() => this.close(id), duree);
  }

  close(id: number) {
    this.toastsSignal.update((l) => l.filter((t) => t.id !== id));
  }
}