import HomePage from "@/components/HomePage/HomePage";
import Header from "@/components/Shared/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Header />
      <HomePage />
      {/* <Footer /> */}
    </main>
  );
}
