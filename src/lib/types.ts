export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface AmenityItem {
  id: string;
  name: string;
  category: 'nirvana' | 'zen' | 'euphoria' | 'clubhouse';
  categoryLabel: string;
  description: string;
  image: string;
  iconName?: string;
  features?: string[];
}

export interface ResidenceConfig {
  id: string;
  type: string;
  name: string;
  tagline: string;
  description: string;
  towers: string[];
  floorPlanImage: string;
  features: string[];
  specs: {
    livingDining?: string;
    masterBedroom?: string;
    balcony?: string;
    kitchen?: string;
  };
}

export interface TowerInfo {
  id: string;
  name: string;
  height: string;
  configurations: string[];
  features: string[];
  typicalPlanImage?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'architecture' | 'residences' | 'podium' | 'amenities' | 'clubhouse' | 'commercial';
  categoryLabel: string;
  image: string;
  caption: string;
  isArtistImpression: boolean;
}

export interface LeadSubmission {
  fullName: string;
  email: string;
  mobile: string;
  interestedIn: string;
  message?: string;
  consent: boolean;
  timestamp?: string;
  source?: string;
}
