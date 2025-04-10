"use client";

import { useSession } from "@/hooks/use-session";

export default function ClientComponent() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Please log in</div>;
  }

  return (
    <div className="bg-[#282d3b] border border-[#42466c] m-4 p-4 rounded-lg shadow-lg text-[#ffffff] max-w-2xl mx-auto">
      <h1>This is from client component</h1>
      <h1>Session id: {session.userId}</h1>
    </div>
  );
}
