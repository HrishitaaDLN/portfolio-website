import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/ui/CursorTrail";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen">
      <CursorTrail />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Research />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
