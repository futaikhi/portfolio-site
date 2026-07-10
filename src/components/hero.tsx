"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe2, Mail, MapPin, Send, Sparkles } from "lucide-react";

const highlights = [
  { label: "Experience", value: "+5 years" },
  { label: "Core Stack", value: "PHP / Node.js" },
  { label: "Focus", value: "Scalable APIs" },
];

export function Hero() {
  return (
    <section id="hero" className="grid gap-8 rounded-[2rem] border border-pink-400/20 bg-[#1a1420]/90 p-8 shadow-[0_20px_80px_rgba(244,114,182,0.12)] lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="space-y-6"
      >

        <div className="space-y-4">
          <p className="font-mono text-sm uppercase tracking-[0.35em] text-stone-400">
            Senior Backend Engineer
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-stone-50 sm:text-5xl">
            Building resilient systems for enterprise products and modern APIs.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-stone-300">
            I design and maintain backend services with a strong focus on performance,
            maintainability, and smooth collaboration across product, mobile, and web teams.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:futaikhi.fut@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-pink-400"
          >
            Contact Me
            <ArrowRight size={16} />
          </a>
          <a
            href="https://github.com/futaikhi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-4 py-2.5 text-sm font-semibold text-stone-200 transition hover:border-pink-400/40 hover:text-pink-300"
          >
            <Globe2 size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/futaikhi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-4 py-2.5 text-sm font-semibold text-stone-200 transition hover:border-pink-400/40 hover:text-pink-300"
          >
            <Send size={16} />
            LinkedIn
          </a>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-stone-400">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-pink-300" />
            Surabaya, Indonesia
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-pink-300" />
            futaikhi.fut@gmail.com
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-[1.5rem] border border-pink-400/20 bg-[#15111a] p-6"
      >
        <div className="mb-6 flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-stone-500">
            Snapshot
          </p>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
            Active Now
          </span>
        </div>

        <div className="space-y-4">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-pink-400/10 bg-[#201724]/70 p-4">
              <p className="text-sm text-stone-400">{item.label}</p>
              <p className="mt-1 text-xl font-semibold text-stone-100">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-pink-400/20 bg-pink-500/10 p-4 text-sm leading-7 text-stone-300">
          Core strengths include API development, database optimization, deployment and
          maintenance in production, and supporting Android and web integration workflows.
        </div>
      </motion.div>
    </section>
  );
}
