import Image from 'next/image';
import { IMAGES } from '@/app/lib/images';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
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
