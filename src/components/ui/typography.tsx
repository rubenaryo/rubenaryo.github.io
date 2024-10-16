import React from "react";

function TypographyH1(props: { children: string | number | boolean }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {props.children}
    </h1>
  );
}

function TypographyLead(props: { children: string | number | boolean }) {
  return (
    <p className="mt-6 text-xl text-slate-700 dark:text-slate-400">
      {props.children}
    </p>
  );
}

function TypographyH2(props: { children: string | number | boolean }) {
  return (
    <h2 className="mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700">
      {props.children}
    </h2>
  );
}

function TypographyH4(props: { children: React.ReactNode }) {
  return (
    <h4 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
      {props.children}
    </h4>
  );
}

function TypographyListHeader(props: { children: React.ReactNode }) {
  return (
    <h4 className="mt-6 mb-2 scroll-m-20 text-xl font-semibold tracking-tight">
      {props.children}
    </h4>
  );
}

function TypographyInlineCode(props: { children: string | number | boolean }) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {props.children}
    </code>
  );
}

function TypographyP(props: { children: React.ReactNode }) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">{props.children}</p>
  );
}

function TypographyInline(props: { children: React.ReactNode }) {
  return (
    <h4 className="mt-8 text-xl text-slate-700 dark:text-slate-400 tracking-tight">
      {props.children}
    </h4>
  );
}

function TypographyInlineRightJustify(props: { children: React.ReactNode }) {
  return (
    <h4 className="mt-8 text-xl text-slate-700 dark:text-slate-400 tracking-tight text-align:right">
      {props.children}
    </h4>
  );
}

function InstitutionHeader(props: { children: React.ReactNode }) {
  return (
    <h4 className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight">
      {props.children}
    </h4>
  );
}

function InstitutionSubheader(props: { children: React.ReactNode }) {
  return (
    <h5 className="mt-1 mb-2 scroll-m-20 font-light tracking-tight">
      {props.children}
    </h5>
  );
}

function InstitutionDescription(props: { children: React.ReactNode }) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-2">{props.children}</p>
  );
}

export {
  TypographyP,
  TypographyH1,
  TypographyH2,
  TypographyH4,
  TypographyListHeader,
  TypographyLead,
  TypographyInlineCode,
  TypographyInline,
  TypographyInlineRightJustify,
  InstitutionHeader,
  InstitutionSubheader,
  InstitutionDescription
};
