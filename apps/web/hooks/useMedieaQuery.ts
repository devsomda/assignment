"use client";

import { useEffect, useState } from "react";

export function useMediaQuery() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth !== null && windowWidth < 768;
  const isTablet =
    windowWidth !== null && windowWidth >= 768 && windowWidth < 1440;
  const isDesktop = windowWidth !== null && windowWidth >= 1440;

  return { isMobile, isTablet, isDesktop };
}
