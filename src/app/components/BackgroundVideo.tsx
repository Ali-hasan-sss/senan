import { motion } from 'motion/react';
import React from 'react';
export function BackgroundVideo() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden" style={{ zIndex: 0 }}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        style={{
          filter: 'brightness(0.3) blur(2px)',
        }}
      >
        <source
          src="@/assets/video.mp4"
          type="video/mp4"
        />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.8) 100%)',
        }}
      />
    </div>
  );
}