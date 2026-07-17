import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(244,114,182,0.16),_transparent_25%),linear-gradient(135deg,_#09070d_0%,_#16121b_100%)] text-stone-100">
      <Navbar />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
        <Analytics />
      </div>
    </main>
  );
}
