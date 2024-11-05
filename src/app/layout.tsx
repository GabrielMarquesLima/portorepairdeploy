import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PortoRepair",
  description: "Challenge 1TDSPW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body      >
        {children}
      </body>
    </html>
  );
}
