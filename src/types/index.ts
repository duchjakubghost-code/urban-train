export interface Product {
  id: string;
  name: string;
  category: 'stationary' | 'portable' | 'custom';
  description: string;
  features: string[];
  price: string;
  image: string;
  specs: {
    pressure: string;
    range: string;
    power: string;
    maintenance: string;
  };
  suitableFor: string[];
  customizable: boolean;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  type: 'city' | 'municipality' | 'park' | 'public';
  description: string;
  images: string[];
  benefits: string[];
  testimonial: {
    author: string;
    role: string;
    quote: string;
  };
  tags: string[];
  featured: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: 'tipy' | 'innovations' | 'uspory' | 'zdravi' | 'inspirace';
  tags: string[];
  relatedPostIds: string[];
  internalLinks: { text: string; slug: string }[];
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
  project?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  institutions: string[];
  benefits: string[];
}
