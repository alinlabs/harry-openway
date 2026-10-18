import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';

export interface Visual3DProps {
  className?: string;
  activeHubIndex?: number;
  onSelectHub?: (index: number) => void;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-full'
}) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden select-none ${className}`}>
      {/* Pure Visual Canvas: 100% Focused on Modern Cloud-Native & Banking Lottie Engine (Zero Title, Zero Text Cards) */}
      <div className="relative w-full h-full flex items-center justify-center p-2">
        <LottiePlayer
          animationData={lottieData}
          className="w-full h-full min-h-[260px] max-h-[340px] scale-120 object-contain drop-shadow-sm"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Visual3D;
