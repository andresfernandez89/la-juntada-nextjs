import { ModeToggle } from "@/components/modeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { PurchaseProvider } from "@/context/PurchaseContext";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen  bg-background text-center font-sans antialiased",
          fontInter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <header className="m-auto max-w-6xl">
            <nav className="p-2 text-right">
              <ModeToggle />
            </nav>
          </header>
          <h1
            className={`${fontRoboto_mono.variable} m-auto max-w-6xl -scroll-m-20 justify-self-end p-[40px] text-center text-4xl font-extrabold tracking-tight lg:text-5xl`}
          >
            La Juntada
          </h1>
          <PurchaseProvider>{children}</PurchaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
