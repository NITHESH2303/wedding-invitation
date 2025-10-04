"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Using any for now to avoid TypeScript issues with rough.js
type RoughInstance = any;

interface DoodleAPIProps {
  type: 'border' | 'arrow' | 'heart' | 'star' | 'flower' | 'swirl' | 'highlight';
  className?: string;
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  animate?: boolean;
  delay?: number;
}

export default function DoodleAPI({
  type,
  className = "",
  width = 100,
  height = 100,
  color = "#f59e0b",
  strokeWidth = 2,
  animate = true,
  delay = 0
}: DoodleAPIProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    if (typeof window !== 'undefined') {
      import('rough').then((rough: any) => {
        if (svgRef.current) {
          const rc = rough.svg(svgRef.current);
          svgRef.current.innerHTML = ''; // Clear previous drawings
          
          switch (type) {
            case 'border':
              drawBorder(rc, width, height, color, strokeWidth);
              break;
            case 'arrow':
              drawArrow(rc, width, height, color, strokeWidth);
              break;
            case 'heart':
              drawHeart(rc, width, height, color, strokeWidth);
              break;
            case 'star':
              drawStar(rc, width, height, color, strokeWidth);
              break;
            case 'flower':
              drawFlower(rc, width, height, color, strokeWidth);
              break;
            case 'swirl':
              drawSwirl(rc, width, height, color, strokeWidth);
              break;
            case 'highlight':
              drawHighlight(rc, width, height, color, strokeWidth);
              break;
          }
        }
      });
    }
  }, [type, width, height, color, strokeWidth]);

  const drawBorder = (rc: RoughInstance, w: number, h: number, color: string, stroke: number) => {
    // Draw a hand-drawn border
    const points = [
      [10, 10], [w-10, 15], [w-5, h-10], [15, h-5], [10, 10]
    ];
    rc.polygon(points, {
      stroke: color,
      strokeWidth: stroke,
      fill: 'none',
      roughness: 2,
      bowing: 3
    });
  };

  const drawArrow = (rc: RoughInstance, w: number, h: number, color: string, stroke: number) => {
    const centerY = h / 2;
    const startX = 10;
    const endX = w - 10;
    
    // Draw curved arrow
    rc.path(`M ${startX} ${centerY} Q ${w/2} ${centerY - 10} ${endX - 15} ${centerY}`, {
      stroke: color,
      strokeWidth: stroke,
      roughness: 1.5,
      bowing: 2
    });
    
    // Arrow head
    rc.polygon([
      [endX - 15, centerY - 5],
      [endX, centerY],
      [endX - 15, centerY + 5]
    ], {
      stroke: color,
      strokeWidth: stroke,
      fill: color,
      roughness: 1
    });
  };

  const drawHeart = (rc: RoughInstance, w: number, h: number, color: string, stroke: number) => {
    const centerX = w / 2;
    const centerY = h / 2;
    const size = Math.min(w, h) * 0.3;
    
    // Heart shape using curves
    const path = `M ${centerX} ${centerY + size/2} 
                  C ${centerX - size/2} ${centerY - size/4}, 
                    ${centerX - size} ${centerY + size/4}, 
                    ${centerX} ${centerY + size/2}
                  C ${centerX + size} ${centerY + size/4}, 
                    ${centerX + size/2} ${centerY - size/4}, 
                    ${centerX} ${centerY + size/2}`;
    
    rc.path(path, {
      stroke: color,
      strokeWidth: stroke,
      fill: 'none',
      roughness: 1.5,
      bowing: 2
    });
  };

  const drawStar = (rc: RoughInstance, w: number, h: number, color: string, stroke: number) => {
    const centerX = w / 2;
    const centerY = h / 2;
    const outerRadius = Math.min(w, h) * 0.3;
    const innerRadius = outerRadius * 0.4;
    const points = 5;
    
    const starPoints = [];
    for (let i = 0; i < points * 2; i++) {
      const angle = (i * Math.PI) / points;
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      starPoints.push([
        centerX + Math.cos(angle - Math.PI/2) * radius,
        centerY + Math.sin(angle - Math.PI/2) * radius
      ]);
    }
    
    rc.polygon(starPoints, {
      stroke: color,
      strokeWidth: stroke,
      fill: 'none',
      roughness: 1.5,
      bowing: 2
    });
  };

  const drawFlower = (rc: RoughInstance, w: number, h: number, color: string, stroke: number) => {
    const centerX = w / 2;
    const centerY = h / 2;
    const petalCount = 6;
    const petalLength = Math.min(w, h) * 0.25;
    
    // Draw petals
    for (let i = 0; i < petalCount; i++) {
      const angle = (i * 2 * Math.PI) / petalCount;
      const startX = centerX + Math.cos(angle) * 5;
      const startY = centerY + Math.sin(angle) * 5;
      const endX = centerX + Math.cos(angle) * petalLength;
      const endY = centerY + Math.sin(angle) * petalLength;
      
      rc.ellipse(
        (startX + endX) / 2,
        (startY + endY) / 2,
        petalLength * 0.6,
        petalLength * 0.3,
        {
          stroke: color,
          strokeWidth: stroke,
          fill: 'none',
          roughness: 1.5,
          bowing: 2,
          angle: angle * 180 / Math.PI
        }
      );
    }
    
    // Draw center
    rc.circle(centerX, centerY, 8, {
      stroke: color,
      strokeWidth: stroke,
      fill: color,
      roughness: 1
    });
  };

  const drawSwirl = (rc: RoughInstance, w: number, h: number, color: string, stroke: number) => {
    const centerX = w / 2;
    const centerY = h / 2;
    const radius = Math.min(w, h) * 0.3;
    
    // Draw spiral
    let path = `M ${centerX} ${centerY}`;
    for (let i = 0; i < 360; i += 10) {
      const angle = (i * Math.PI) / 180;
      const currentRadius = radius * (i / 360);
      const x = centerX + Math.cos(angle) * currentRadius;
      const y = centerY + Math.sin(angle) * currentRadius;
      path += ` L ${x} ${y}`;
    }
    
    rc.path(path, {
      stroke: color,
      strokeWidth: stroke,
      fill: 'none',
      roughness: 2,
      bowing: 3
    });
  };

  const drawHighlight = (rc: RoughInstance, w: number, h: number, color: string, stroke: number) => {
    // Draw a wavy highlight line
    const centerY = h / 2;
    let path = `M 10 ${centerY}`;
    
    for (let x = 10; x < w - 10; x += 10) {
      const y = centerY + Math.sin((x / w) * Math.PI * 4) * 8;
      path += ` L ${x} ${y}`;
    }
    
    rc.path(path, {
      stroke: color,
      strokeWidth: stroke * 2,
      fill: 'none',
      roughness: 2,
      bowing: 4,
      opacity: 0.6
    });
  };

  if (!isMounted) {
    return (
      <div 
        className={`${className}`}
        style={{ width, height }}
      />
    );
  }

  return (
    <motion.div
      className={className}
      initial={animate ? { opacity: 0, scale: 0.8 } : {}}
      animate={animate ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={animate ? { scale: 1.1, rotate: 5 } : {}}
    >
      <svg
        ref={svgRef}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="doodle-svg"
      />
    </motion.div>
  );
}

// Pre-built doodle components for easy use
export const DoodleBorder = (props: Omit<DoodleAPIProps, 'type'>) => (
  <DoodleAPI {...props} type="border" />
);

export const DoodleArrow = (props: Omit<DoodleAPIProps, 'type'>) => (
  <DoodleAPI {...props} type="arrow" />
);

export const DoodleHeart = (props: Omit<DoodleAPIProps, 'type'>) => (
  <DoodleAPI {...props} type="heart" />
);

export const DoodleStar = (props: Omit<DoodleAPIProps, 'type'>) => (
  <DoodleAPI {...props} type="star" />
);

export const DoodleFlower = (props: Omit<DoodleAPIProps, 'type'>) => (
  <DoodleAPI {...props} type="flower" />
);

export const DoodleSwirl = (props: Omit<DoodleAPIProps, 'type'>) => (
  <DoodleAPI {...props} type="swirl" />
);

export const DoodleHighlight = (props: Omit<DoodleAPIProps, 'type'>) => (
  <DoodleAPI {...props} type="highlight" />
);
