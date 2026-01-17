import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Use clientX and clientY directly - they work correctly in both LTR and RTL
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Ensure events are captured on the document, not just window
    document.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main cursor circle */}
      <motion.div
        className="fixed pointer-events-none"
        style={{ zIndex: 99999, left: 0, top: 0 }}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div 
          className="w-6 h-6 rounded-full border-2 border-white bg-white/10 backdrop-blur-sm"
          style={{
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)',
          }}
        />
      </motion.div>

      {/* Outer cursor ring */}
      <motion.div
        className="fixed pointer-events-none"
        style={{ zIndex: 99998, left: 0, top: 0 }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isClicking ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.8,
        }}
      >
        <motion.div 
          className="w-10 h-10 rounded-full border border-white/60"
          style={{
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>

      {/* Glowing trail effect */}
      <motion.div
        className="fixed pointer-events-none"
        style={{ zIndex: 99997, left: 0, top: 0 }}
        animate={{
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
        }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 20,
          mass: 1.2,
        }}
      >
        <motion.div
          className="w-16 h-16 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 100, 0, 0.3), rgba(255, 150, 0, 0.1), transparent)',
            filter: 'blur(10px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Particle effect on click */}
      {isClicking && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed pointer-events-none z-[9996] w-2 h-2 rounded-full bg-orange-500"
              style={{
                left: mousePosition.x,
                top: mousePosition.y,
              }}
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              animate={{
                x: Math.cos((i * Math.PI * 2) / 6) * 40,
                y: Math.sin((i * Math.PI * 2) / 6) * 40,
                opacity: 0,
              }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}
            />
          ))}
        </>
      )}
    </>
  );
}
