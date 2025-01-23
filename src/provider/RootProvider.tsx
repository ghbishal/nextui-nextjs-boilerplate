'use client';
import type { ReactNode } from 'react';
import { useRouter } from '@/i18n/i18nNavigation';
import { HeroUIProvider } from '@heroui/system';

export function RootProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <HeroUIProvider navigate={router.push}>
      {children}
    </HeroUIProvider>
  );
}
