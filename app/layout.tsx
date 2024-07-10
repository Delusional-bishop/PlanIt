import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({ subsets: ["latin"],
  weight:['400','500','600','700'],
  variable:'--font-poppins'
 });

export const metadata: Metadata = {
  title: "PlanIt",
  description: "PlanIt is a platform to organise Events!!",
  icons:{
    icon:'/favicon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider> 
      
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    </ClerkProvider>  
    
  );
}
