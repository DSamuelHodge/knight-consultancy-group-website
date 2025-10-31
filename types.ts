import React from 'react';

export type Page = 'home' | 'services' | 'service' | 'about' | 'contact';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  overview: string;
  workflow: string[];
  integrations: string[];
  compliance: string;
}

export interface ValuePillar {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
}
