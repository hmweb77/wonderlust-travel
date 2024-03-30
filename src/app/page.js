import Blogs from "@/components/Blog";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import Newsletter from "@/components/Newsletter";
import Trip from "@/components/Trip";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Trip />
      <Blogs/>
      <Newsletter />
      <Footer/>
    </main>
  );
}
