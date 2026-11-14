import { CurrencyPipe } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ttc',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './ttc.html',
  styleUrl: './ttc.css',
})
export class Ttc {
  prixHT = signal(0);
  quantite = signal(1);
  tva = signal(18);

  prixUnitaireTTC = computed(() => this.prixHT() * (1 + this.tva() / 100));

  tauxRemise = computed(() => {
    const q = this.quantite();
    if (q > 15) return 0.3;
    if (q > 10) return 0.2;
    return 0;
  });

  remise = computed(() => this.prixUnitaireTTC() * this.quantite() * this.tauxRemise());

  prixTotalTTC = computed(() => this.prixUnitaireTTC() * this.quantite() - this.remise());
}