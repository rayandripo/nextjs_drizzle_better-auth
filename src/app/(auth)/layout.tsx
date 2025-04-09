import Navbar from "@/components/navbar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [background-size:40px_40px]"></div>
      <div className="relative h-screen flex flex-col items-center justify-center px-4 pt-16">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </main>
  );
}
