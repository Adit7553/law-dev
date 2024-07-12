"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import ModalD from "@/components/Modal/Accept"
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showModal, setShowModal] = useState(true)
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="dark"
        >
          {showModal && <ModalD showModal={showModal} setShowModal={setShowModal}/>}
          <Lines />
          <Header />
          <ToasterContext />
          {children}
          {/* <Footer /> */}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
