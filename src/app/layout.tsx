import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const font = Noto_Sans_JP({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "kazu's homepage",
  description: "description kazu's information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={font.className}>{children}</body>
    </html>
  );
}
