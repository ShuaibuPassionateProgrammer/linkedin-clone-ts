import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "LinkedIn clone",
  description: "Developed Shuaibu (Passionate Programmer)",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen flex flex-col">
          <Toaster position="bottom-left" />

          <header className="border-b sticky top-0 bg-white z-50">
            <Header />
          </header>

          <div className=" bg-[#F4F2ED] flex-1 w-full">
            <main className="max-w-6xl mx-auto">{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
