import React from 'react';
import { LottiePlayer } from '@/src/components/LottiePlayer';
import lottieData from './lottie.json';

export interface Visual3DProps {
  className?: string;
}

export const Visual3D: React.FC<Visual3DProps> = ({
  className = 'w-full h-full'
}) => {
  return (
    <div className={"relative w-full h-full flex items-center justify-center overflow-hidden select-none " + className}>
      <div className="relative w-full h-full flex items-center justify-center p-2">
        <LottiePlayer
          animationData={lottieData}
          className="w-full h-full max-h-[270px] object-contain drop-shadow-xs"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Visual3D;
