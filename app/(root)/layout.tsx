import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      // <ClerkProvider>s

      <div className="flex h-screen flex-col">
        <Header/>
        <main className="flex-1">{children}</main>
        <Footer/>
      </div>
      // </ClerkProvider>s
    );
  }
  