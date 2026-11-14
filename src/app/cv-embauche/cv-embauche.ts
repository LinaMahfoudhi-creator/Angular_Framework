import { Component, inject } from '@angular/core';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-cv-embauches',
  standalone: true,
  templateUrl: './cv-embauche.html',
})
export class CvEmbauches {
  embauches = inject(EmbaucheService).liste;
}