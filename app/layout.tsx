import type { Metadata } from "next";
import localFont from "next/font/local";
import Sidebar from "./components/sidebar/sidebar";
import "./globals.css";
import GlobalStyleProvider from "./providers/GlobalStyleProvider";
import ContextProvider from "./providers/ContextProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TaskTrackr",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ContextProvider>
        <GlobalStyleProvider>
        <Sidebar />
        {children}
        </GlobalStyleProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
