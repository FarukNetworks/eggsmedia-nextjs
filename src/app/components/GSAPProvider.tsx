'use client';

import { ReactNode } from 'react';
import { useGSAP } from '../hooks/useGSAP';

interface GSAPProviderProps {
  children: ReactNode;
  enableSmoothScroll?: boolean;
  enableStickNav?: boolean;
  enableCursor?: boolean;
  refreshDelay?: number;
}

export default function GSAPProvider({
  children,
  enableSmoothScroll = true,
  enableCursor = true,
  refreshDelay = 500,
}: GSAPProviderProps) {
  useGSAP({
    enableSmoothScroll,
    enableCursor,
    refreshDelay,
  });

  return <>{children}</>;
}
