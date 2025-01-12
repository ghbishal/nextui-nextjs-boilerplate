'use client';
import type { ReactNode } from 'react';
import { useRouter } from '@/i18n/i18nNavigation';
import { NextUIProvider } from '@nextui-org/system';

export function RootProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      {children}
    </NextUIProvider>
  );
}
