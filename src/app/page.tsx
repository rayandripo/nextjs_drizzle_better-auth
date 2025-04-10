import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [background-size:40px_40px]"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 py-20 text-center mt-20">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
            Nextjs / Better-auth / drizzle / shadcn / tailwind
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            No coding required to make customizations. The live customizer has
            everything your marketing need.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className="text-gray-600">Join community</span>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-full transition-colors duration-200"
            >
              Get Early Access
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
