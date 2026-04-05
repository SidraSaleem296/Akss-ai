import { useId } from 'react';
import { Link } from 'react-router-dom';

type BrandMarkProps = {
  compact?: boolean;
};

const BrandMark = ({ compact = false }: BrandMarkProps) => {
  const gradientId = useId();

  return (
    <Link to="/" className="inline-flex items-center gap-3 text-white">
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        className={compact ? 'h-10 w-10' : 'h-12 w-12'}
        fill="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="10" y1="10" x2="54" y2="54">
            <stop offset="0%" stopColor="#8AA3FF" />
            <stop offset="42%" stopColor="#4C2FCF" />
            <stop offset="100%" stopColor="#00A896" />
          </linearGradient>
        </defs>
        <rect
          x="8"
          y="8"
          width="48"
          height="48"
          rx="18"
          fill={`url(#${gradientId})`}
        />
        <path
          d="M21 46 32 19l11 27"
          stroke="white"
          strokeWidth="5.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.8 34h10.4"
          stroke="white"
          strokeWidth="5.4"
          strokeLinecap="round"
        />
        <circle cx="32" cy="18" r="3.5" fill="#00A896" />
      </svg>

      <span className="leading-none">
        <span className="block font-display text-lg font-semibold tracking-[0.22em] text-white">
          AKSS
        </span>
        <span className="block text-[11px] uppercase tracking-[0.28em] text-white/[0.55]">
          AI Product Studio
        </span>
      </span>
    </Link>
  );
};

export default BrandMark;
