import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NavToggle } from "@/components/ui/nav-toggle";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { ContactToggle } from "@/components/ui/contact-toggle";
function StickyHeader() {
  const router = useRouter();
  return (
    <div className="m-auto flex w-screen flex-col items-center bg-background">
      <div className="flex w-screen justify-between px-3 py-3 sm:w-4/5 sm:px-0">
        <div className="flex items-center">
          <Image
            src="/headshot.jpg"
            alt="Vercel Logo"
            className="mr-3 rounded-full"
            width={40}
            height={40}
          />
          <h4 className={"text-xl font-semibold tracking-tight"}>
            <Link href="/">rubenaryo</Link>
          </h4>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Button
            variant="ghost"
            className="font-600 border-none text-lg text-slate-700 focus:ring-0 dark:text-slate-400"
            size="sm"
            onClick={() => router.push("/about")}
          >
            about
          </Button>
          <Button
            variant="ghost"
            className="font-600 border-none text-lg text-slate-700 focus:ring-0 dark:text-slate-400"
            size="sm"
            onClick={() => router.push("/blog")}
          >
            blog
          </Button>
          <ThemeToggle />
          <ContactToggle />
        </div>
      </div>
    </div>
  );
}

export default StickyHeader;
