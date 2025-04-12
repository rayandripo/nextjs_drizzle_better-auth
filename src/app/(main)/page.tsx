import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Gradient Orb */}
      <Image
        src="/images/gradient-orb.png"
        alt="Gradient orb"
        width={800}
        height={800}
        className="absolute top-0 left-0 w-[800px] h-[800px] object-cover opacity-60"
        priority
      />

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 bg-white/5 rounded-full text-sm font-medium mb-8">
            Hundreds of Integrations
          </div>

          <h1 className="text-6xl font-bold leading-tight">
            Better Auth is the new{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 text-transparent bg-clip-text">
              standard for authentication
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The delightfully smart authentication platform.
          </p>

          <div className="flex items-center justify-center gap-4 mt-12">
            <div className="relative flex-1 max-w-md">
              <input
                type="email"
                placeholder="Email address..."
                className="w-full px-6 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400"
              />
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Join waitlist
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
