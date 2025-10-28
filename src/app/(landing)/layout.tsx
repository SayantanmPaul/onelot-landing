export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="max-w-screen-2xl mx-auto w-full">{children}</main>;
}
