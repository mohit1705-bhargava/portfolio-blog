import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./globals.css";

export const metadata = {
  title: "My Portfolio + Blog",
  description: "Showcasing my projects and blogs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
