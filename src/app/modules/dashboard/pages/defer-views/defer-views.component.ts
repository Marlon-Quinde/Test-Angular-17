import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './defer-views.component.html',
  styleUrls: ['./defer-views.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferViewsComponent {}