import { Component, input, output } from '@angular/core';
import { Cv } from '../cv';
import { CvItem } from '../cv-item/cv-item';

@Component({
  selector: 'app-cv-list',
  imports: [CvItem],
  templateUrl: './cv-list.html',
})
export class CvList {
  cvs = input.required<Cv[]>();
  selectedId = input<number | null>(null);
  selected = output<Cv>();
}