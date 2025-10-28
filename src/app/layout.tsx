import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OneLot | Landing ',
  description:
    'OneLot helps used car dealers grow with fast inventory loans and free tools to streamline operations, boost sales, and scale their business.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('bg-background text-foreground font-inter min-h-screen antialiased')}>
        {children}
      </body>
    </html>
  );
}
