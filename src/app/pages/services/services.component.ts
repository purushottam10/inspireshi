import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SERVICES_CONFIG } from '../../config/services.config';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  /** Configurable from services.config.ts */
  config = SERVICES_CONFIG;

  hasImage(url: string | null | undefined): boolean {
    return !!url && url.trim() !== '';
  }
}
