import React from "react";
import { StarIcon } from "./Icons";

export interface TestimonialCardProps {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
  rating: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  id,
  name,
  role,
  company,
  content,
  avatarUrl,
  rating,
}) => {
  return (
    <article
      id={`testimonial-card-${id}`}
      className="p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-mint dark:border-zinc-800/80 shadow-3d-mint flex flex-col justify-between hover:translate-y-[-4px] hover:border-forsythia/60 transition-interactive duration-200 select-none"
    >
      <div>
        {/* Rating stars block */}
        <div className="flex items-center gap-1 mb-5 text-forsythia">
          {Array.from({ length: rating }).map((_, i) => (
            <StarIcon key={i} className="w-4 h-4 fill-current text-accent" />
          ))}
        </div>

        {/* Semantic blockquote */}
        <blockquote className="text-xs font-sans text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
          "{content}"
        </blockquote>
      </div>

      <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-mint/40 dark:border-zinc-800/40">
        <img
          src={avatarUrl}
          alt={`Profile photo of ${name}`}
          className="w-10 h-10 rounded-full object-cover border border-mint dark:border-zinc-800/80 shadow-inner"
          loading="lazy"
        />
        <div>
          <span className="block text-xs font-mono font-bold text-nocturnal dark:text-white leading-none">
            {name}
          </span>
          <span className="block text-[9px] font-mono text-zinc-500 dark:text-mint/60 mt-1 uppercase tracking-wide">
            {role}, <span className="font-extrabold text-saffron">{company}</span>
          </span>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
