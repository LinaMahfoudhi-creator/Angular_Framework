import { Injectable, inject, signal } from '@angular/core';
import { Cv } from './cv';
import { ToastService } from './toast.service';

@Injectable({ providedIn: 'root' })
export class EmbaucheService {
  private toast = inject(ToastService);

  static readonly BUDGET_MAX = 3;

  private embauchesSignal = signal<Cv[]>([]);
  readonly liste = this.embauchesSignal.asReadonly();

  estEmbauche(id: number): boolean {
    return this.embauchesSignal().some((cv) => cv.id === id);
  }

  embaucher(cv: Cv) {
    const nom = `${cv.firstname} ${cv.name}`;

    if (this.estEmbauche(cv.id)) {
      this.toast.show(`${nom} est déjà pré embauché`, 'warning');
      return;
    }

    this.embauchesSignal.update((l) => [...l, cv]);
    this.toast.show(`${nom} a été pré embauché avec succès`, 'success');

    if (this.embauchesSignal().length > EmbaucheService.BUDGET_MAX) {
      this.toast.show('Attention : le budget a été dépassé !', 'danger');
    }
  }
}