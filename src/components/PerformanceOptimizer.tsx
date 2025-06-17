
import { useEffect } from 'react';

// Performance optimization utilities
export const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical images
      const heroImageLink = document.createElement('link');
      heroImageLink.rel = 'preload';
      heroImageLink.as = 'image';
      document.head.appendChild(heroImageLink);
    };

    // Implement intersection observer for lazy loading
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('animate-fade-in');
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Observe all elements with lazy-load class
    const lazyElements = document.querySelectorAll('.lazy-load');
    lazyElements.forEach((el) => observer.observe(el));

    preloadCriticalResources();

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

// Image optimization component
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false 
}: OptimizedImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${priority ? '' : 'lazy-load'}`}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
};

export default PerformanceOptimizer;
