import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import useMagneticEffect from '../hooks/useMagneticEffect';

interface MagneticButtonProps {
  to: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const MagneticButton = ({ to, className = '', children, onClick }: MagneticButtonProps) => {
  const magneticRef = useMagneticEffect<HTMLAnchorElement>({ strength: 0.25, radius: 80 });

  return (
    <Link ref={magneticRef} to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default MagneticButton;
