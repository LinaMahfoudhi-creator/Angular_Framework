import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-premier-composant',
  imports: [FormsModule],
  templateUrl: './premier-composant.html',
  styleUrl: './premier-composant.css',
})
export class PremierComposant {
  couleur = 'pink';

  reinitialiser() {
    this.couleur = 'pink';
  }
}