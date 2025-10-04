"use client";

import { motion } from "framer-motion";

interface SkeletonLoaderProps {
  className?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
}

export default function SkeletonLoader({ 
  className = "", 
  children, 
  isLoading = false 
}: SkeletonLoaderProps) {
  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <motion.div
      className={`bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-xl animate-skeleton-pulse ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-skeleton-pulse" />
    </motion.div>
  );
}

// Specific skeleton components
export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-2xl p-6 animate-skeleton-pulse ${className}`}>
      <div className="space-y-4">
        <div className="h-6 bg-gray-300 rounded-lg w-3/4 animate-skeleton-pulse" />
        <div className="h-4 bg-gray-300 rounded w-1/2 animate-skeleton-pulse" />
        <div className="h-4 bg-gray-300 rounded w-2/3 animate-skeleton-pulse" />
      </div>
    </div>
  );
}

export function SkeletonText({ lines = 3, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-skeleton-pulse ${
            i === lines - 1 ? 'w-2/3' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
}

export function SkeletonButton({ className = "" }: { className?: string }) {
  return (
    <div className={`h-12 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-xl animate-skeleton-pulse ${className}`} />
  );
}
