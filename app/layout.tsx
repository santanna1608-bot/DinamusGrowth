import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dinamus Growth | Tráfego Pago & Automação de WhatsApp',
  description: 'Estruturação de campanhas de tráfego pago integradas com automações inteligentes no WhatsApp. Atraia, qualifique e converta leads B2B de forma 100% automática.',
  icons: {
    icon: 'https://drive.usercontent.google.com/download?id=1P85-A90mzJlze4Mhnv5r532nOBlvWC89&export=view',
    shortcut: 'https://drive.usercontent.com/download?id=1P85-A90mzJlze4Mhnv5r532nOBlvWC89&export=view',
    apple: 'https://drive.usercontent.google.com/download?id=1P85-A90mzJlze4Mhnv5r532nOBlvWC89&export=view',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth dark`}>
      <body suppressHydrationWarning className="bg-[#030303] text-gray-100 min-h-screen antialiased selection:bg-emerald-500/20 selection:text-emerald-400 font-sans">
        {children}
      </body>
    </html>
  );
}

