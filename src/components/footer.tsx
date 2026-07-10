import { Globe2, Mail, MapPin, Send } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="rounded-[2rem] border border-pink-400/20 bg-[#16121b]/90 p-8 lg:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.35em] text-stone-500">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-stone-50">
            Let&apos;s build dependable backend products together.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-400">
            Interested in backend architecture, API delivery, or systems that need steadier
            maintenance and growth? Reach out.
          </p>
        </div>

        <div className="space-y-3 text-sm text-stone-300">
          <a href="mailto:futaikhi.fut@gmail.com" className="flex items-center gap-2 transition hover:text-pink-300">
            <Mail size={16} className="text-pink-300" />
            futaikhi.fut@gmail.com
          </a>
          <a href="https://linkedin.com/in/futaikhi" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-pink-300">
            <Send size={16} className="text-pink-300" />
            linkedin.com/in/futaikhi
          </a>
          <a href="https://github.com/futaikhi" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-pink-300">
            <Globe2 size={16} className="text-pink-300" />
            github.com/futaikhi
          </a>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-pink-300" />
            Surabaya, Indonesia
          </div>
        </div>
      </div>
    </footer>
  );
}
