import type { Metadata } from "next";
import { fontVariables } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next App",
  description: "Next.js App Router example with Tailwind and Prettier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontVariables} h-full antialiased font-sans`}
    >
      <body className="min-h-screen w-full">
        <div className="flex min-h-screen w-full justify-center bg-zinc-200 dark:bg-zinc-900">
          <div className="flex w-full min-h-screen max-w-[430px] flex-col bg-background text-foreground">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
