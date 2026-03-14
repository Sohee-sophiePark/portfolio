import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <hr className="border-border max-w-3xl mx-auto" />
      <About />
      <hr className="border-border max-w-3xl mx-auto" />
      <Projects />
      <hr className="border-border max-w-3xl mx-auto" />
      <Resume />
      <hr className="border-border max-w-3xl mx-auto" />
      <Contact />
    </main>
  );
}
