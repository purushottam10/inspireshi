import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SOCIAL_LINKS } from '../../config/social-links.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  newsletterForm: FormGroup;
  socialLinks = SOCIAL_LINKS;

  constructor(private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subscribe: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.newsletterForm.valid) {
      console.log('Newsletter subscription:', this.newsletterForm.value);
      alert('Thank you for subscribing!');
      this.newsletterForm.reset();
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
