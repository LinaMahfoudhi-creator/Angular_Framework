import { Component, inject, signal } from '@angular/core';
import { Cv } from '../cv';
import { CvService } from '../cv.service';
import { CvList } from '../cv-list/cv-list';
import { CvDetail } from '../cv-detail/cv-detail';
import { CvEmbauches } from '../cv-embauche/cv-embauche';

@Component({
  selector: 'app-cv-page',
  imports: [CvList, CvDetail, CvEmbauches],
  templateUrl: './cv-page.html',
})
export class CvPage {
  private cvService = inject(CvService);

  cvs = this.cvService.cvs;
  selectedCv = signal<Cv | null>(null);

  onSelect(cv: Cv) {
    this.selectedCv.set(cv);
  }
}