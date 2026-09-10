import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

const inter = Inter({ subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata = {
  title: 'Pons Interface — Premium Launchpad',
  description: 'Launch and trade tokens on Robinhood Chain with institutional-grade infrastructure',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} font-body antialiased`}>
        {/* Animated Background */}
        <div className="bg-animated" />
        <div className="bg-grid" />
        
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
