import type { Metadata } from "next";
import "@/shared/css/content.css";
import "@/shared/css/header.css";
import "./globals.css";
import PageLayout from "@/shared/ui/layout/PageLayout";

export const metadata: Metadata = {
  title: "My Blog",
  description: "Created by idkwiwtk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        {/* 나눔 글꼴 */}
        <link
          href="https://hangeul.pstatic.net/hangeul_static/css/nanum-gothic.css"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
