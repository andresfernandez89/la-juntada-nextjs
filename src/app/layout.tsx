import { ModeToggle } from "@/components/modeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { fontInter, fontRoboto_mono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "La juntada",
  description: "Calcula las cuentas con tus amigos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "m-auto min-h-screen max-w-6xl bg-background font-sans antialiased",
          fontInter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header>
            <nav className="p-2 text-right">
              <ModeToggle />
            </nav>
            <h1
              className={`${fontRoboto_mono.variable} -scroll-m-20 justify-self-end p-[40px] text-center text-4xl font-extrabold tracking-tight lg:text-5xl`}
            >
              La Juntada
            </h1>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
