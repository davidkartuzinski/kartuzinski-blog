import { Figtree, Lora } from 'next/font/google';

export const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
  display: 'swap',
});

export const lora = Lora({
  weight: '600',
  variable: '--font-lora',
  subsets: ['latin'],
  display: 'swap',
});
