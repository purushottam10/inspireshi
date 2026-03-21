import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SOCIAL_LINKS } from '../../config/social-links.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  socialLinks = SOCIAL_LINKS;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
