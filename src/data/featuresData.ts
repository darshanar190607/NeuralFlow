export interface FeatureItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  metricLabel: string;
  metricValue: string;
  technicalDetails: string[];
  iconName: "ChartPie" | "Cog8Tooth" | "ArrowPath" | "LinkIcon";
}

export const FEATURES: FeatureItem[] = [
  {
    id: "schema-mapper",
    title: "Agentic Schema Mapper",
    shortDesc: "Never write another API connector mapping logic.",
    longDesc: "Our autonomous agents monitor schema changes, interpret database column semantics, and align data mappings dynamically even if sources alter upstream structures.",
    metricLabel: "Drift Adaptation Speed",
    metricValue: "< 3.2s",
    technicalDetails: [
      "Semantic similarity indexing",
      "Auto-column alignment",
      "Drift notifications & recovery",
    ],
    iconName: "ChartPie",
  },
  {
    id: "data-sanitizer",
    title: "Automated Data Sanitizer",
    shortDesc: "Clean, deduplicate, and redact PII automatically.",
    longDesc: "Eliminate manual data cleansing. The platform constantly scrubs relational databases for bad email syntax, missing country codes, duplicate profiles, and sensitive PII formats.",
    metricLabel: "Deduplication Accuracy",
    metricValue: "99.99%",
    technicalDetails: [
      "Zero-shot LLM validation rules",
      "Regular expression pattern sanitization",
      "Smart address and phone formatting",
    ],
    iconName: "Cog8Tooth",
  },
  {
    id: "vector-embeddings",
    title: "Real-time Vector Sync",
    shortDesc: "Keep your LLM Vector DBs perfectly in sync with operational databases.",
    longDesc: "Any new signup or support issue is embedded instantly using top-tier models and synced directly to pinecone, qdrant, or pgvector so your AI search is always fresh.",
    metricLabel: "Vector Sync Latency",
    metricValue: "42ms",
    technicalDetails: [
      "In-line chunking and tokenization",
      "Multi-model provider support",
      "High-throughput vector indexing",
    ],
    iconName: "ArrowPath",
  },
  {
    id: "api-sync",
    title: "Autonomous API Connector",
    shortDesc: "Generate REST, GraphQL and Webhook links dynamically.",
    longDesc: "Describe what system you want to plug in. Our AI agent compiles the webhook trigger, extracts authentication headers, handles paginated streams, and deploys it synchronously.",
    metricLabel: "Custom API Deploy Time",
    metricValue: "< 45s",
    technicalDetails: [
      "Dynamic auth token rotation",
      "Automated page cursor handling",
      "Adaptive rate limiting throttling",
    ],
    iconName: "LinkIcon",
  },
];
