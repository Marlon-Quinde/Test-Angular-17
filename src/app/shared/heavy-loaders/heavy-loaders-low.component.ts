import { CommonModule } from '@angular/common';
import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-low',
  standalone: true,
  imports: [CommonModule],
  template: `<section [ngClass]="['w-full h-[600px]', cssClass]">
    Heavy Loader Slow
  </section>`,
})
export class HeavyLoadersLowComponent {
  @Input({ required: true }) cssClass!: string;
  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
  }
}
