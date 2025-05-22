// types/index.ts
export interface MonthlyPricingPlan {
  name: string;
  tagline: string;
  price: number;
  features: string[];
  videoEditingDetails: string;
  campaignDetails: string;
  campaignMetaAdsPayment: string;
  isHighlighted?: boolean; // Optional property
}