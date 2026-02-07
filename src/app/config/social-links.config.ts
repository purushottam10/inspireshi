/** Shared social media / referral links – used by Contact page and Footer. Update URLs here to change both. */
export interface SocialLink {
  name: string;
  url: string;
  icon: 'instagram' | 'facebook' | 'linkedin' | 'youtube' | 'pinterest';
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', url: 'https://www.instagram.com/inspireshi_media/', icon: 'instagram' },
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61586075961595', icon: 'facebook' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/inspireshi-media', icon: 'linkedin' },
  { name: 'YouTube', url: 'https://www.youtube.com/@InspireshiMedia', icon: 'youtube' },
  { name: 'Pinterest', url: 'https://in.pinterest.com/inspireshi/', icon: 'pinterest' },
];
