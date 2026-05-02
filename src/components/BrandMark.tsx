import { Link } from 'react-router-dom';

type BrandMarkProps = {
  compact?: boolean;
};

const BrandMark = ({ compact = false }: BrandMarkProps) => {
  return (
    <Link to="/" className="inline-flex items-center gap-3 text-white">
      <svg
        aria-hidden="true"
        viewBox="320 360 440 360"
        className={compact ? 'h-11 w-11' : 'h-16 w-16'}
        fill="none"
      >
        <defs>
          <style>{`.cls-1{fill:none;}.cls-2{fill:#f2f2f2;}.cls-3{fill:#adbca9;}`}</style>
        </defs>
        <rect className="cls-1" width="1080" height="1080"/>
        <path className="cls-2" d="M407.58,380.84l-65.53,30a5.87,5.87,0,0,0-3.41,5.32V549a5.85,5.85,0,0,0,3.38,5.3l70.45,32.88a5.86,5.86,0,0,0,6.26-.85l226.75-193a4.18,4.18,0,0,0-4.24-7.07L554,420.64l-8.48-36.89a4.18,4.18,0,0,0-6.79-2.24l-123,104.87.19-100.21A5.84,5.84,0,0,0,407.58,380.84Z"/>
        <circle className="cls-3" cx="683.07" cy="436.17" r="32.15"/>
        <path className="cls-2" d="M643.52,684.08l65.52-30a5.84,5.84,0,0,0,3.41-5.31V515.91a5.83,5.83,0,0,0-3.37-5.29l-70.46-32.88a5.85,5.85,0,0,0-6.26.84l-226.75,193a4.18,4.18,0,0,0,4.24,7.07l87.27-34.39,8.49,36.89a4.18,4.18,0,0,0,6.78,2.25l123-104.87-.19,100.21A5.84,5.84,0,0,0,643.52,684.08Z"/>
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
