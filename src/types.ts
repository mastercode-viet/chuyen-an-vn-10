export interface KeyMetric {
  id: string;
  label: string;
  value: string;
  unit: string;
  borderColor: string;
  textColor: string;
}

export interface LegalArgument {
  id: number;
  tag: string;
  title: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  badge: string;
  caption: string;
  description: string;
  specs: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
}

export interface MapStageInfo {
  id: number;
  label: string;
  title: string;
  caption: string;
  subtitle: string;
}

export interface ShipmentData {
  id: number;
  date: string;
  label: string;
  weight: string;
  detail: string;
  heightPercent: number;
  isFlagged?: boolean;
}

export interface DeathPenaltyDefendant {
  id: number;
  name: string;
  branch: string;
  volume: string;
}

export interface ShowbizCase {
  id: string;
  name: string;
  alias: string;
  year: string;
  role: string;
  crime: string;
  location: string;
  date: string;
  consequence?: string;
  image?: string;
}
