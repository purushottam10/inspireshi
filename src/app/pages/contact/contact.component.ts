import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CONTACT_FORM_ACCESS_KEY } from '../../config/contact-form.config';
import { SOCIAL_LINKS } from '../../config/social-links.config';

export type { SocialLink } from '../../config/social-links.config';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitting = false;
  submitMessage: 'success' | 'error' | null = null;

  socialLinks = SOCIAL_LINKS;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.contactForm.valid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const key = CONTACT_FORM_ACCESS_KEY?.trim();
    if (!key) {
      alert(
        'Contact form is not configured. Add your Web3Forms Access Key in src/app/config/contact-form.config.ts. ' +
        'Get a free key at https://web3forms.com (use officialrashi.96@gmail.com).'
      );
      return;
    }

    this.submitting = true;
    this.submitMessage = null;

    const value = this.contactForm.value;
    const body = {
      access_key: key,
      subject: value.subject || 'Get in Touch – Inspireshi Media',
      from_name: `${value.firstName} ${value.lastName}`.trim(),
      email: value.email,
      replyto: value.email,
      firstName: value.firstName,
      lastName: value.lastName,
      phone: value.phone,
      message: value.message,
    };

    fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        this.submitting = false;
        if (data.success) {
          this.submitMessage = 'success';
          this.contactForm.reset();
        } else {
          this.submitMessage = 'error';
        }
        
      })
      .catch(() => {
        this.submitting = false;
        this.submitMessage = 'error';
      });
  }
}
