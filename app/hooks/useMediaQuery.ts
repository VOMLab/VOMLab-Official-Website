import { useState, useEffect } from "react";

const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

export const useMediaQuery = (width: number) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMatches(window.innerWidth >= width);
    };

    // 초기 설정
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return matches;
};

// 자주 사용하는 브레이크포인트에 대한 편의 훅들
export const useIsDesktop = () => useMediaQuery(BREAKPOINTS.SM);
export const useIsTablet = () => useMediaQuery(BREAKPOINTS.MD);
export const useIsLargeScreen = () => useMediaQuery(BREAKPOINTS.LG);
