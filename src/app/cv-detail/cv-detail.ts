import { Component, inject, input } from '@angular/core';
import { Cv } from '../cv';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.html',
  styleUrl: './cv-detail.css',
})
export class CvDetail {
  private embaucheService = inject(EmbaucheService);

  cv = input<Cv | null>(null);

  embaucher(cv: Cv) {
    this.embaucheService.embaucher(cv);
  }

  estEmbauche(id: number): boolean {
    return this.embaucheService.estEmbauche(id);
  }
}