import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow]',
})
export class Rainbow {
  @HostBinding('style.color') color = 'black'; //binding to the color style of the input element
  @HostBinding('style.border-color') borderColor = 'black';
  //binding to the border-color style of the input element
  @HostListener('keyup')
  onKeyUp() {
    this.color = this.randomColor();
    this.borderColor = this.randomColor();
  }

  private randomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
}