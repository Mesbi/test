import {Inter} from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Meta from "@/components/Meta";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
}) ;

export default function AppLayout({children}) {
    return (
        <div className={'${inter.variable} font-sans min-h-screen flex flex-col'}>
            <Meta/>
            <Header/>
            <main className="flex-grow bg-[#f7f7f7]">{children}</main>
            <Footer/>
        </div>
    );
}