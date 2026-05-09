"use client";

import { useState } from "react";

const heroImage = "/hero.jpg";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative h-screen overflow-hidden bg-[#c5cdd2]">
      {/* Background image */}
      <img
        src={heroImage}
        alt=""
        aria-hidden
        className="hero-img pointer-events-none select-none"
      />

      {/* Gradual blur overlay — fades in from bottom up */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] backdrop-blur-md [mask-image:linear-gradient(to_top,black_40%,transparent_100%)]" />

      <div className="relative flex flex-col h-full px-4 md:px-8">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-6 shrink-0">
          <span className="text-base font-semibold tracking-[-0.04em] capitalize text-black">
            H.Studio
          </span>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-14 text-base font-semibold tracking-[-0.04em] capitalize text-black">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="transition-opacity hover:opacity-60"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className="hidden md:flex items-center justify-center bg-black text-white text-sm font-medium tracking-[-0.035em] px-4 py-3 rounded-full">
            Let&apos;s talk
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-[72px] left-0 right-0 z-50 bg-black px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-base font-semibold capitalize py-3 text-white border-b border-white/10 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <button className="mt-4 w-fit bg-white text-black text-sm font-medium px-4 py-3 rounded-full">
              Let&apos;s talk
            </button>
          </div>
        )}

        {/* Hero content area */}
        <div className="flex-1 relative">
          {/* Heading — vertically centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center md:items-start w-fit">
              <p className="font-[family-name:var(--font-geist-mono)] text-[13px] md:text-[14px] text-white uppercase mix-blend-overlay leading-[1.1] mb-0.5">
                [ Hello i&apos;m ]
              </p>
              <h1 className="text-[127px] md:text-[13.75vw] font-medium text-white mix-blend-overlay text-center capitalize tracking-[-0.07em] leading-[0.9] whitespace-pre-wrap md:whitespace-nowrap">
                Harvey   Specter
              </h1>
            </div>
          </div>

          {/* Description — pinned bottom-right on desktop, bottom-left on mobile */}
          <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0 flex md:justify-end">
            <div className="w-[335px] md:max-w-[294px] flex flex-col gap-4 items-start">
              <p className="text-[13px] font-bold italic text-[#1f1f1f] uppercase tracking-[-0.04em] leading-[1.1] text-left">
                H.Studio is a{" "}
                <span className="font-normal">full-service</span> creative
                studio creating beautiful digital experiences and products. We
                are an <span className="font-normal">award winning</span> design
                and art group specializing in branding, web design and
                engineering.
              </p>
              <button className="w-fit bg-black text-white text-sm font-medium tracking-[-0.035em] px-4 py-3 rounded-full">
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
