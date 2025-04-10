import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0b14] text-white">
      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 bg-white/5 rounded-full text-sm font-medium mb-8">
            Hundreds of Integrations
          </div>

          <h1 className="text-6xl font-bold leading-tight">
            Next Auth is the new{" "}
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

        {/* Preview Section */}
        <div className="mt-20">
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
            {/* You can add a screenshot or preview image here */}
            <div className="h-[400px] w-full bg-[#0f1117] rounded-lg m-4"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
