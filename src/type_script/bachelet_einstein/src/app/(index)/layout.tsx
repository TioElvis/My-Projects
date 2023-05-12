import '@/styles/globals.css';

import Header from '@/components/header';

export const metadata = {
  title: 'I.I.S. Bachelet-Einstein',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <Header />
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
