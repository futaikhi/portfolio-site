import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-pink-400/20 bg-[#16121b]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#hero" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-400/40 bg-pink-500/10 text-sm font-semibold text-pink-200">
            FK
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-100">
              Futaikhi
            </p>
            <p className="text-xs text-stone-400">Senior Backend Engineer</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-stone-300 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-pink-300">
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="mailto:futaikhi.fut@gmail.com"
          className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-500/10 px-3 py-2 text-sm font-medium text-pink-200 transition hover:bg-pink-500/20"
        >
          Let&apos;s Talk
          <ArrowUpRight size={16} />
        </a>
      </div>
    </header>
  );
}
