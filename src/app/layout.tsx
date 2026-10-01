import type { Metadata } from "next";
import "./globals.css";
import { RoleProvider } from "@/components/RoleProvider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "NOVA School - AI-powered school management",
  description: "A premium, production-quality AI-powered School Management System demo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RoleProvider>
          {children}
        </RoleProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
