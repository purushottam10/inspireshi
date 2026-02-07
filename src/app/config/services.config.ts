/**
 * Services section configuration.
 * Edit this file to change section title, intro text, and each service
 * (title, description, and image). Set imageUrl to null or '' to hide the image for that service.
 */

export interface ServiceItem {
  id?: string;
  title: string;
  description: string;
  /** Path to image (e.g. assets/services/photo.jpg) or full URL. Leave empty to show no image. */
  imageUrl?: string | null;
}

export interface ServicesSectionConfig {
  sectionTitle: string;
  sectionDescription?: string;
  services: ServiceItem[];
}

export const SERVICES_CONFIG: ServicesSectionConfig = {
  sectionTitle: 'Our Services',
  sectionDescription: `This is your Services Page. It's a great opportunity to provide information about the services you provide. 
    Whether you're offering multiple services, courses or programs, you can edit this space to fit your website's needs. 
    Explain what each item entails and add photos or videos for even more engagement.`,

  services: [
    {
      id: 'creative-designs',
      title: 'Creative Designs',
      description: 'We believe good branding is more than just visuals. Inspireshi Media creates meaningful designs and smart digital strategies that help brands connect, engage, and move forward.',
      imageUrl: '', // e.g. 'assets/services/creative-designs.jpg'
    },
    {
      id: 'social-media',
      title: 'Social Media Management',
      description: 'We manage your social presence with consistent content, smart strategy, and timely execution—so your brand stays visible, relevant, and engaging every day.',
      imageUrl: '',
    },
    {
      id: 'paid-ads',
      title: 'Paid Ads Management',
      description: 'From planning to performance, we create and manage data-driven ad campaigns that reach the right audience, control costs, and deliver measurable results.',
      imageUrl: '',
    },
    {
      id: 'video-editing',
      title: 'Video Editing',
      description: 'We craft clean, compelling videos that tell your story clearly—optimized for platforms, pacing, and audience attention.',
      imageUrl: '',
    },
    {
      id: 'motion-graphics',
      title: 'Motion Graphics',
      description: 'We bring ideas to life through dynamic motion graphics that simplify messages, grab attention, and make your brand more memorable.',
      imageUrl: '',
    },
  ],
};
