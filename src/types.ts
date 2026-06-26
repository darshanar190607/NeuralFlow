export type CurrencyCode = "USD" | "INR" | "EUR";

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  multiplier: number;
}

export interface PricingTier {
  id: string;
  name: string;
  basePrice: number; // monthly in USD
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  metricLabel: string;
  metricValue: string;
  technicalDetails: string[];
  iconName: string; // matches Lucide icon names
}

export interface PipelineRun {
  id: string;
  timestamp: string;
  source: string;
  agentName: string;
  status: "idle" | "running" | "completed" | "failed";
  progress: number;
  logs: string[];
}

export interface TabSyncMessage {
  type: "THEME_CHANGE" | "PRICING_CHANGE" | "PIPELINE_RUN" | "CLEAR_HISTORY";
  payload: any;
  senderTabId: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
  rating: number;
}
