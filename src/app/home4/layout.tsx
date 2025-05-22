import Footer from "@/components/home_4/home/Footer";
import Header from "@/components/home_4/home/Header";
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
        <Header />
        {children}
        <Footer />
    </>
  );
}
