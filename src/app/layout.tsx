import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:`Seungmin's Blog`,
    template: `Seungmin's Blog |%s`
  },
  description: "This is Blog of Seumgin Lee",
  icons:{
    icon:'/favicon.ico'
}};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Header/>
        <main className="grow">{children}</main>
        <Footer/>
        </body>
    </html>
  );
}
