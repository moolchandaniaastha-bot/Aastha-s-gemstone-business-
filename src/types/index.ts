export interface Gemstone {
  id: string;
  name: string;
  subtitle: string;
  countryOfOrigin: string;
  miningRegion: string;
  meaningAndEnergy: string;
  chakras: string[];
  element: string;
  hardness: string;
  assignedAsset: {
    id: string;
    label: string;
    filename: string;
    description: string;
  };
  details: string;
  craftingTip: string;
  recommendedMetal: string;
  pastelColor: {
    bg: string;
    border: string;
    text: string;
    badgeBg: string;
    badgeText: string;
    glow: string;
  };
}

export interface WorkshopSession {
  id: string;
  title: string;
  duration: string;
  batchSize: string;
  pricePerSeat: string;
  schedule: string;
  materialsIncluded: string[];
  whatYouMake: string[];
  assignedAsset: {
    id: string;
    label: string;
    filename: string;
    description: string;
  };
  bgBlockColor: string; // #E5EDF0 or #DDCDBD
  pastelTheme: {
    bg: string;
    cardBg: string;
    border: string;
    pillBg: string;
    accent: string;
  };
}

export interface CustomBarItem {
  id: string;
  title: string;
  description: string;
  assignedAsset: {
    id: string;
    label: string;
    filename: string;
    description: string;
  };
  craftDetails: string;
  estimatedTime: string;
  pastelAccent: {
    bg: string;
    border: string;
    chip: string;
  };
}

export interface StudioLocation {
  id: string;
  name: string;
  neighborhood: string;
  address: string;
  cityPostal: string;
  hours: string;
  days: string;
  specialty: string;
  transitGuide: string;
  features: string[];
  phone: string;
  whatsappNumber: string;
  googleMapsUrl: string;
}

export interface BrandAssetMapping {
  slotId: string;
  assetNumber: number;
  displayName: string;
  originalFilename: string;
  sectionAssigned: 'Hero' | 'Brand Sourcing' | 'Gemstone Directory' | 'Workshops' | 'Custom Bar';
  purpose: string;
  aspectRatio: string;
  fallbackGradient: string;
}
