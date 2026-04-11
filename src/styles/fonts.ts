import localFont from 'next/font/local';

export const fontSans = localFont({
  src: '../assets/fonts/inter-latin-wght-normal.woff2',
  variable: '--font-sans',
  weight: '100 900',
  display: 'swap',
  adjustFontFallback: 'Arial',
});

export const fontSerif = localFont({
  src: '../assets/fonts/source-serif-4-latin-wght-normal.woff2',
  variable: '--font-serif',
  weight: '200 900',
  display: 'swap',
  adjustFontFallback: 'Times New Roman',
});

export const fontMono = localFont({
  src: '../assets/fonts/jetbrains-mono-latin-wght-normal.woff2',
  variable: '--font-mono',
  weight: '100 800',
  display: 'swap',
  adjustFontFallback: false,
});

export const fontCookieRun = localFont({
  src: [
    { path: '../assets/fonts/cookierun-regular.otf', weight: '400' },
    { path: '../assets/fonts/cookierun-bold.otf', weight: '700' },
  ],
  variable: '--font-cookierun',
});

export const fontVariables = [
  fontSans.variable,
  fontSerif.variable,
  fontMono.variable,
  fontCookieRun.variable,
].join(' ');
