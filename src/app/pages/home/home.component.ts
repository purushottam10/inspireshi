import { Component } from '@angular/core';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  scrollToContact() {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  }
}
