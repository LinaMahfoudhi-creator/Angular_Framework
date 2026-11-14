import { Component, input, output } from '@angular/core';
import { Cv } from '../cv';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.html',
})
export class CvItem {
  cv = input.required<Cv>();
  actif = input(false);
  selected = output<Cv>();

  select() {
    this.selected.emit(this.cv());
  }
}