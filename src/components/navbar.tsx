import { AirVent } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-[#0A0B14] border-b border-[#21243d]">
      <div className="container-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <AirVent className="h-6 w-6 text-[#ffffff]" />
            <span className="font-bold text-[#c2c2c2]">
              Next / Drizzle / Better-auth.
            </span>
          </Link>

          <div>
            {session ? (
              <form
                action={async () => {
                  "use server";
                  await auth.api.signOut({
                    headers: await headers(),
                  });
                  redirect("/");
                }}
              >
                <Button
                  className="bg-neutral-700 text-white p-2 rounded-md hover:bg-neutral-600 cursor-pointer"
                  type="submit"
                >
                  Sign Out
                </Button>
              </form>
            ) : (
              <Link href="/sign-in" className={buttonVariants()}>
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
