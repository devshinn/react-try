export * from '@/lib/st';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
  ssr: false,
});

export { ThemeToggle };
