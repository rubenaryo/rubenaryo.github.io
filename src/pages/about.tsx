// pages/index.js

import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { 
  TypographyH1, 
  TypographyH2, 
  TypographyH4, 
  TypographyListHeader,
  TypographyP, 
  TypographyLead, 
  TypographyInline, 
  TypographyInlineCode,
  TypographyInlineRightJustify,
  InstitutionHeader,
  InstitutionSubheader,
  InstitutionDescription
} from "@/components/ui/typography";
import { Root } from "@/components/layouts/root";
import { MiddlePanel } from "@/components/layouts/middle-panel";
import { Badge } from "@/components/ui/badge";
import StickyHeader from "@/components/layouts/sticky-nav";

export default function Home() {
  return (
    <Root>
      <StickyHeader />
      <MiddlePanel>
        <TypographyH1>About Me</TypographyH1>
        <TypographyLead>Some details about me.</TypographyLead>
        <div className="mt-6">
          <TypographyH2>Industry Experience</TypographyH2>
          <InstitutionHeader>Electronic Arts (Maxis)</InstitutionHeader>
          <InstitutionSubheader>January 2021 - Present</InstitutionSubheader>
        </div>
        <div className="mt-6">
          <TypographyH2>Education</TypographyH2>
          <InstitutionHeader>Rochester Institute of Technology (RIT)</InstitutionHeader>
          <InstitutionSubheader>August 2017 - December 2020</InstitutionSubheader>
          <InstitutionDescription>Bachelor of Science in Game Design and Development</InstitutionDescription>
        </div>
        <div className="mt-6">
          <TypographyH2>Proficiencies</TypographyH2>
          <TypographyListHeader>Game Development</TypographyListHeader>
          <ul className="list-outside list-none pl-3">
            <li className="space-x-2 leading-7">
              <span className="font-small text-slate-900 dark:text-slate-50">
                Rendering and Shader Development
              </span>
            </li>
            <li className="space-x-2 leading-7">
              <span className="font-small text-slate-900 dark:text-slate-50">
                Animation Programming and Procedural Animation Systems
              </span>
            </li>
            <li className="space-x-2 leading-7">
              <span className="font-small text-slate-900 dark:text-slate-50">
                Data-Oriented, Hardware Driven Program Design
              </span>
            </li>
            <li className="space-x-2 leading-7">
              <span className="font-small text-slate-900 dark:text-slate-50">
                Cross-Platform development across Mac and Consoles
              </span>
            </li>
            <li className="space-x-2 leading-7">
              <span className="font-small text-slate-900 dark:text-slate-50">
                Performance Analysis and Profiling
              </span>
            </li>
          </ul>
          <TypographyListHeader>Math</TypographyListHeader>
          <ul className="list-outside list-none pl-3">
            <li className="space-x-2 leading-7">
              <span className="font-small text-slate-900 dark:text-slate-50">
                Linear Algebra
              </span>
            </li>
            <li className="space-x-2 leading-7">
              <span className="font-small text-slate-900 dark:text-slate-50">
                Differential Equations
              </span>
            </li>
            <li className="space-x-2 leading-7">
              <span className="font-small text-slate-900 dark:text-slate-50">
                Multivariate and Vector Calculus
              </span>
            </li>
            <li className="space-x-2 leading-7">
              <span className="font-small text-slate-900 dark:text-slate-50">
                Quaternions and Complex Numbers
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <TypographyH2>Tech</TypographyH2>
          <div className="mt-6" />
          <ul className="list-outside list-none pl-3">
            <li className="space-x-2 leading-7">
              <span className="font-small text-slate-900 dark:text-slate-50">
                Languages
              </span>
              <TypographyInlineCode>C++</TypographyInlineCode>
              <TypographyInlineCode>C</TypographyInlineCode>
              <TypographyInlineCode>C#</TypographyInlineCode>
              <TypographyInlineCode>Python</TypographyInlineCode>
              <TypographyInlineCode>HLSL / GLSL</TypographyInlineCode>
            </li>
            <li className="space-x-2 leading-7">
              <span className="font-small text-slate-900 dark:text-slate-50">
                Graphics Libraries
              </span>
              <TypographyInlineCode>DirectX 11</TypographyInlineCode>
              <TypographyInlineCode>DirectX 12</TypographyInlineCode>
              <TypographyInlineCode>Metal</TypographyInlineCode>
              <TypographyInlineCode>Vulkan</TypographyInlineCode>
            </li>
            <li className="space-x-2 leading-7">
              <span className="font-small text-slate-900 dark:text-slate-50">
                Engines
              </span>
              <TypographyInlineCode>Unreal</TypographyInlineCode>
              <TypographyInlineCode>Unity</TypographyInlineCode>
            </li>
          </ul>
        </div>
      </MiddlePanel>
    </Root>
  );
}
