# Inspireshi Media - Angular Website

A modern, responsive Angular website for Inspireshi Media showcasing their brand, services, and contact information.

## Features

- **Home Page**: Hero section with company introduction, mission, approach, and vision
- **Contact Page**: Split-layout contact form with gradient background
- **Testimonials**: Client testimonials carousel section
- **Footer**: Company information, social media links, and newsletter subscription
- **Responsive Design**: Mobile-friendly layout across all pages

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation header component
│   │   ├── footer/          # Footer component with newsletter
│   │   └── testimonials/    # Testimonials carousel component
│   ├── pages/
│   │   ├── home/            # Home page component
│   │   └── contact/         # Contact page component
│   ├── app.component.ts     # Root component
│   ├── app.module.ts        # Root module
│   └── app-routing.module.ts # Routing configuration
├── index.html
├── main.ts
└── styles.css
```

## Pages

- **Home** (`/` or `/home`): Main landing page with hero section, mission, approach, and vision
- **Contact** (`/contact`): Contact form page

## Contact Information

For any requests or inquiries, please contact: purushottamn10@gmail.com

## Development

### Build

```bash
npm run build
```

### Run Tests

```bash
npm test
```

## Technologies Used

- Angular 17
- TypeScript
- CSS3
- Angular Forms (Reactive Forms)
- Angular Router

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
