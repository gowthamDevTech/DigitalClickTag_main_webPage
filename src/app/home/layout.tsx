import Header from "@/components/home_4/home/Header";
import Footer from "@/components/home_4/commonComponents/Footer";
import Navbar from "@/components/home_4/commonComponents/Navbar";
import SplashCursor from "@/components/cursor/splashcursor";
import ContactButtons from "@/components/home_4/buttons/ContactButtons";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Click Tag",
  description:
    "Digital Click Tag is an IT services company specializing in digital marketing, web development, and mobile app development to power your business growth.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>

        {/* <Header /> */}
      <Navbar />
{/* <SplashCursor/> */}
        {children}
      <Footer />
      <ContactButtons />
    </>
  );
}
