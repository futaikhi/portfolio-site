import { GraduationCap, ShieldCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="grid gap-6 rounded-[2rem] border border-pink-400/20 bg-[#1a1420]/90 p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
      <div>
        <p className="font-mono text-sm uppercase tracking-[0.35em] text-stone-500">About</p>
        <h2 className="mt-3 text-3xl font-semibold text-stone-50">Professional summary</h2>
        <p className="mt-4 text-lg leading-8 text-stone-300">
          Experienced Senior Backend Engineer with more than 5 years of experience in backend
          application development, system maintenance, and REST API implementation for enterprise
          environments. I am comfortable working in structured corporate settings and partnering
          with cross-functional teams to deliver dependable software.
        </p>
      </div>

      <div className="space-y-4 rounded-[1.5rem] border border-pink-400/20 bg-[#15111a] p-6">
        <div className="flex items-start gap-3">
          <div className="rounded-full bg-pink-500/10 p-2 text-pink-300">
            <GraduationCap size={18} />
          </div>
          <div>
            <h3 className="font-semibold text-stone-100">Education</h3>
            <p className="mt-1 text-sm text-stone-400">
              Bachelor&apos;s Degree in Information Technology — Institut Teknologi Adhi Tama
              Surabaya (2016-2023)
            </p>
            <p className="mt-1 text-sm text-stone-400">GPA: 3.51/4.00</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="rounded-full bg-pink-500/10 p-2 text-pink-300">
            <ShieldCheck size={18} />
          </div>
          <div>
            <h3 className="font-semibold text-stone-100">Certification</h3>
            <p className="mt-1 text-sm text-stone-400">Junior Programming Certification</p>
          </div>
        </div>
      </div>
    </section>
  );
}
