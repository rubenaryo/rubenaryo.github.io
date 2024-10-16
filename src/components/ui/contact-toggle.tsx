import * as React from "react";
import { useRouter } from "next/router";
import { Icons } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ContactToggle() {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="border-none focus:ring-0" size="sm">
          <Icons.share className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100" />
          <Icons.share className="absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100" />
          <span className="sr-only">Contact</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuItem
          onClick={() => router.push("https://www.linkedin.com/in/rubenaryo/")}
        >
          <Icons.linkedin className="mr-2 h-4 w-4" />
          <span>linkedin</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push("https://github.com/rubenaryo")}
        >
          <Icons.github className="mr-2 h-4 w-4" />
          <span>github</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
