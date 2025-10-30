import Navbar from '@/components/layout/Navbar';

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full">
      <header className="sticky top-0 left-0 w-full bg-background z-50">
        <Navbar />
      </header>
      <div className="max-w-360 mx-auto w-full ">{children}</div>
    </main>
  );
}
