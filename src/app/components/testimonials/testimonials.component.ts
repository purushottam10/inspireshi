import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  currentTestimonial = 0;
  
  testimonials = [
    {
      text: "Working with Inspireshi Media has been a game-changer for our business. Their strategic approach and tailored solutions have significantly boosted our operational efficiency and business growth.",
      rating: 5
    },
    {
      text: "The team at Inspireshi Media understands our brand vision perfectly. Their creative solutions and digital strategies have helped us reach new heights in our market presence.",
      rating: 5
    },
    {
      text: "Outstanding service and results! Inspireshi Media transformed our digital presence and helped us connect with our audience in meaningful ways.",
      rating: 5
    }
  ];

  get currentTestimonialData() {
    return this.testimonials[this.currentTestimonial];
  }

  nextTestimonial() {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentTestimonial = (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0).map((_, i) => i);
  }
}
