import Image from "next/image";
import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";

export default function Home() {
  return (
   <main className=" bg-primary hidden lg:block">
    <section className=" h-screen overflow-hidden">
    <Navbar/>
    <Hero/>
    </section>
    
   </main>
  );
}
