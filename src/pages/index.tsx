import { MiddlePanel } from "@/components/layouts/middle-panel";

import { Checkbox } from "@/components/ui/checkbox";
import { Root } from "@/components/layouts/root";
import {
  TypographyH1,
  TypographyH2,
  TypographyH4,
  TypographyLead,
  TypographyP,
  TypographyInlineCode,
} from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import StickHeader from "@/components/layouts/sticky-nav";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  return (
    <Root>
      <StickHeader />
      <MiddlePanel>
        <TypographyH1>Home</TypographyH1>
        <div className="p-1"></div>
        <TypographyLead>Welcome to my personal website!</TypographyLead>
        <TypographyP>
          {"I'm Ruben, a software engineer based in San Francisco specializing in game development, "}
          {"particularly in the realm of game engines, graphics, and animation. "}
          {"This is a place I stood up to showcase my work and what I'm passionate about."}
        </TypographyP>
        <div className="mt-4 flex flex-row items-center gap-2">
          <Button
            variant="ghost"
            className="font-600 bg-muted border-none text-lg text-slate-700 focus:ring-0 dark:text-slate-400"
            size="sm"
            onClick={() => router.push("/about")}
          >
            About Me
          </Button>
          <Button
            variant="ghost"
            className="font-600 bg-muted border-none text-lg text-slate-700 focus:ring-0 dark:text-slate-400"
            size="sm"
            onClick={() => router.push("/blog")}
          >
            Blog
          </Button>
        </div>
        <TypographyH2>In the works</TypographyH2>
        <TypographyP>{"What I'm working on right now."}</TypographyP>
        <div className="mt-6 leading-7">
          <div className="flex items-center space-x-2">
            <Checkbox id="blog-post" disabled checked />
            <label htmlFor="blog-post" className="leading-none ">
              <Link
                className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-50"
                href="https://github.com/rubenaryo/Easel"
              >
                Easel: Custom Game Engine for Windows, built with DirectX 11
              </Link>
            </label>
          </div>
        </div>

        <div className="mt-6 leading-7">
          <div className="flex items-center space-x-2">
            <Checkbox id="blog-post" disabled />
            <label htmlFor="blog-post" className="leading-none ">
              <Link
                className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-50"
                href="https://github.com/rubenaryo/Muon"
              >
                Muon: A DirectX 12 Ultimate port of <i>Easel</i>
              </Link>
            </label>
          </div>
        </div>

        <div className="mt-6 leading-7">
          <div className="flex items-center space-x-2">
            <Checkbox id="blog-post" disabled />
            <label htmlFor="blog-post" className="leading-none ">
              <Link
                className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-50"
                href="https://github.com/rubenaryo/NakMuay"
              >
                NakMuay: An Unreal Engine 5 Combat System based on Muay Thai / Kickboxing
              </Link>
            </label>
          </div>
        </div>
      
      </MiddlePanel>
    </Root>
  );
}
