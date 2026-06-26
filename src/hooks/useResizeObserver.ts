import { useState, useEffect, RefObject } from "react";

/**
 * Custom hook to monitor element resizing and determine mobile/desktop state
 * Watches element boundaries using ResizeObserver with a debounce mechanism.
 */
export const useResizeObserver = (
  elementRef: RefObject<HTMLElement | null>,
  breakpoint: number = 768,
  debounceMs: number = 100
): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const targetElement = elementRef.current;
    if (!targetElement) return;

    let timer: NodeJS.Timeout;

    // Use ResizeObserver for performance and correctness
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        clearTimeout(timer);
        timer = setTimeout(() => {
          setIsMobile(width < breakpoint);
        }, debounceMs);
      }
    });

    observer.observe(targetElement);

    // Initial sync
    setIsMobile(targetElement.getBoundingClientRect().width < breakpoint);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [elementRef, breakpoint, debounceMs]);

  return isMobile;
};
