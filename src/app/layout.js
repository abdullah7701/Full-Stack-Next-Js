import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Chatbot from "@/components/chatbot/Chatbot";
import Link from "next/link";
import Image from "next/image";
import Providers from "@/components/ProgressBarProvider";
import PopupCookie from "@/components/Cookies";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InfoLatch",
  description: "Explore InfoLatch's services and how we can help transform your business with our innovative solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Providers>
          <div>
            {/* <Link
           
            href="https://wa.me/+923446743886?text=Hello%20there"
            className="fixed bottom-4 right-4 z-10 cursor-pointer"
          >
            <Image src="/whatsapp.png" alt="sas" width={60} height={60} />
          </Link> */}
            <PopupCookie />
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
