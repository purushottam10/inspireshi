import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CONTACT_FORM_ACCESS_KEY } from '../../config/contact-form.config';

/** Update these URLs to point to your actual social media pages. */
export interface SocialLink {
  name: string;
  url: string;
  icon: 'instagram' | 'facebook' | 'linkedin' | 'youtube' | 'pinterest';
}

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

  /** Social media links – update URLs to your profiles. Remove or add entries as needed. */
  socialLinks: SocialLink[] = [
    { name: 'Instagram', url: 'https://www.instagram.com/inspireshi_media/', icon: 'instagram' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61586075961595', icon: 'facebook' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/inspireshi-media', icon: 'linkedin' },
    { name: 'YouTube', url: 'https://www.youtube.com/@InspireshiMedia', icon: 'youtube' },
    { name: 'Pinterest', url: 'https://in.pinterest.com/inspireshi/', icon: 'pinterest' },
  ];

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
