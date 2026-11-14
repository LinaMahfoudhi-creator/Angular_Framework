import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-mini-word',
  imports: [FormsModule, NgStyle],
  templateUrl: './mini-word.html',
  styleUrl: './mini-word.css',
})
export class MiniWord {
  couleur = signal('#d91ec3');
  taille = signal(30);
  police = signal('arial');

  polices = ['arial', 'verdana', 'times new roman', 'courier new', 'georgia', 'comic sans ms'];

  styleParagraphe = computed(() => ({
    color: this.couleur(),
    'font-size.px': this.taille(),
    'font-family': this.police(),
  }));
}