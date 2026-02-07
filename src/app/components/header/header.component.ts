import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuItems = [
    { label: 'Home', route: '/home' },
    { label: 'Services', route: '/services' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' }
  ];
}
