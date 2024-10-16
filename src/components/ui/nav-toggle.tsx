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

export function NavToggle() {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="border-none focus:ring-0" size="sm">
          <Icons.menu className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100" />
          <Icons.menu className="absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100" />
          <span className="sr-only">Toggle navbar theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuItem onClick={() => router.push("/blog")}>
          <Icons.blog className="mr-2 h-4 w-4" />
          <span>blog</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push("https://linkedin.com/in/samkyuseo")}
        >
          <Icons.linkedin className="mr-2 h-4 w-4" />
          <span>linkedin</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push("https://github.com/samkyuseo")}
        >
          <Icons.github className="mr-2 h-4 w-4" />
          <span>github</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
