import Navbar from '@/components/layout/Navbar';

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-360 mx-auto w-full">
      <Navbar />
      {children}
    </main>
  );
}
