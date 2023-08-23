import './globals.css';
import styles from './page.module.css';

import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

const opensans = Noto_Sans_KR({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Наш проект',
  description: 'Сгенерирован с CRA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={opensans.className}>
        <nav className={styles.nav}>
          <ul>
            <li>Курсы</li>
            <li>Наставник</li>
            <li>О нас</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
