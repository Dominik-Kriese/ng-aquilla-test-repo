import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NxDataDisplayModule } from '@aposin/ng-aquila/data-display';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NxDataDisplayModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
