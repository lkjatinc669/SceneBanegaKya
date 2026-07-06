import { Mukta, Manrope } from 'next/font/google';

// English Font (Manrope)
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-english',
  display: 'swap',
});

// Hindi Font (Mukta)
const mukta = Mukta({
  subsets: ['devanagari', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-hindi',
  display: 'swap',
});

export {manrope, mukta};