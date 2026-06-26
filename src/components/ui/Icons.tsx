import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

export const ArrowPath: React.FC<IconProps> = ({ className = "w-6 h-6", size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || "256"}
    height={size || "256"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);

export const ArrowTrendingUp: React.FC<IconProps> = ({ className = "w-6 h-6", size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || "512"}
    height={size || "512"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);

export const ChartPie: React.FC<IconProps> = ({ className = "w-6 h-6", size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || "256"}
    height={size || "256"}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}
  >
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
      <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
      <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
    </g>
  </svg>
);

export const ChevronDown: React.FC<IconProps> = ({ className = "w-6 h-6", size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || "512"}
    height={size || "512"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="m19.5 8.25l-7.5 7.5l-7.5-7.5" />
  </svg>
);

export const ChevronLeft: React.FC<IconProps> = ({ className = "w-6 h-6", size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || "512"}
    height={size || "512"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

export const ChevronRight: React.FC<IconProps> = ({ className = "w-6 h-6", size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || "512"}
    height={size || "512"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="m8.25 4.5l7.5 7.5l-7.5 7.5" />
  </svg>
);

export const ChevronUp: React.FC<IconProps> = ({ className = "w-6 h-6", size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || "512"}
    height={size || "512"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="m4.5 15.75l7.5-7.5l7.5 7.5" />
  </svg>
);

export const Cog8Tooth: React.FC<IconProps> = ({ className = "w-6 h-6", size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || "256"}
    height={size || "256"}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}
  >
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
      <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z" />
      <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
    </g>
  </svg>
);

export const Cube16Solid: React.FC<IconProps> = ({ className = "w-6 h-6", size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || "16"}
    height={size || "16"}
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
  </svg>
);

export const LinkIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || "256"}
    height={size || "256"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
);

export const LinkSolid: React.FC<IconProps> = ({ className = "w-6 h-6", size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || "256"}
    height={size || "256"}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037a.75.75 0 0 1-.646 1.353a5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353a5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037a.75.75 0 0 1-.354-1Z"
      clipRule="evenodd"
    />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || "512"}
    height={size || "512"}
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
  </svg>
);

export const XMark: React.FC<IconProps> = ({ className = "w-6 h-6", size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || "512"}
    height={size || "512"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// UI UX Icons

export const SunIcon: React.FC<IconProps> = ({ className = "w-5 h-5", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className = "w-5 h-5", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

export const ZapIcon: React.FC<IconProps> = ({ className = "w-5 h-5", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className={className}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export const ArrowUpRightIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className={className}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
);

export const PlayIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    stroke="currentColor"
    className={className}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export const ActivityIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className={className}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12h3.087c.75 0 1.437.377 1.837 1.009l2.27 3.596a1.125 1.125 0 001.97-.247l2.258-7.53a1.125 1.125 0 012.137-.08l2.248 5.855a1.125 1.125 0 001.115.753H21.75" />
  </svg>
);

export const CreditCardIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className={className}
    {...props}
  >
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

export const StarIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);
