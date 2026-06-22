import React from 'react';
import { Facebook, Instagram, Whatsapp, Telegram, Tiktok, Linkedin, X, Youtube, Mail, Phone, Globe } from 'lucide-react';

interface SocialIconProps {
  platform: 'facebook' | 'instagram' | 'whatsapp' | 'telegram' | 'tiktok' | 'linkedin' | 'x' | 'youtube' | 'email' | 'phone' | 'website';
  value: string;
  className?: string;
  children?: React.ReactNode;
}

const getIcon = (platform: SocialIconProps['platform']) => {
  switch (platform) {
    case 'facebook':
      return Facebook;
    case 'instagram':
      return Instagram;
    case 'whatsapp':
      return Whatsapp;
    case 'telegram':
      return Telegram;
    case 'tiktok':
      return Tiktok;
    case 'linkedin':
      return Linkedin;
    case 'x':
      return X;
    case 'youtube':
      return Youtube;
    case 'email':
      return Mail;
    case 'phone':
      return Phone;
    case 'website':
      return Globe;
    default:
      return Globe;
  }
};

const getHref = (platform: SocialIconProps['platform'], value: string) => {
  switch (platform) {
    case 'whatsapp':
      return `https://wa.me/${value.replace(/[^0-9]/g, '')}`;
    case 'email':
      return `mailto:${value}`;
    case 'phone':
      return `tel:${value.replace(/[^0-9]/g, '')}`;
    case 'website':
      return value.startsWith('http') ? value : `https://${value}`;
    default:
      return value;
  }
};

const SocialIcon: React.FC<SocialIconProps> = ({ platform, value, className, children }) => {
  const IconComponent = getIcon(platform);
  const href = getHref(platform, value);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 transition-colors duration-200 ${className}`}
      aria-label={`Enlace a ${platform}`}
    >
      <IconComponent size={20} />
      {children && <span>{children}</span>}
    </a>
  );
};

export default SocialIcon;
