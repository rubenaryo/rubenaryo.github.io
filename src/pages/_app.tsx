import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

import "@/styles/mdx.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/**
 * Root of all components. Every page that you create
 * in pages directory will move to this component.
 * @param param
 * @returns
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Head>
        <title>Ruben&apos;s DevBlog</title>
      </Head>
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  );
}
