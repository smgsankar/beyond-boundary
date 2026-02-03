import Image from 'next/image';
import { IMAGES } from '@/app/lib/images';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: { container: 'h-6 w-6', gap: 'gap-2', text: 'text-sm' },
  md: { container: 'h-8 w-8', gap: 'gap-3', text: 'text-base' },
  lg: { container: 'h-10 w-10', gap: 'gap-4', text: 'text-xl' },
};

export default function Logo({ className, showText = false, size = 'md' }: LogoProps) {
  const sizeConfig = sizeMap[size];

  if (showText) {
    return (
      <div className={`flex items-center ${sizeConfig.gap} ${className ?? ''}`}>
        <div className={`relative ${sizeConfig.container}`}>
          <Image
            src={IMAGES.logo}
            alt="BeyondBoundary Logo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <h2 className={`${sizeConfig.text} font-bold leading-tight tracking-tight`}>
          BeyondBoundary
        </h2>
      </div>
    );
  }

  return (
    <div className={`relative ${sizeConfig.container} ${className ?? ''}`}>
      <Image
        src={IMAGES.logo}
        alt="BeyondBoundary Logo"
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
}
