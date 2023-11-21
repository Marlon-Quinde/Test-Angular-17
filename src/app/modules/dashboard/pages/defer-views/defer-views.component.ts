import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersLowComponent } from '@shared/heavy-loaders/heavy-loaders-low.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [CommonModule, HeavyLoadersLowComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
  styleUrls: ['./defer-views.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferViewsComponent {}
