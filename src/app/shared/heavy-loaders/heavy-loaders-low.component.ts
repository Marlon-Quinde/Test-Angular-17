import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-low',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1>Hola mundo</h1> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersLowComponent {}
