"use client";

import { useState, useEffect } from "react";
import { LogoMark } from "./Icons";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Padroeiros", href: "#padroeiros" },
  { label: "Encontros", href: "#encontros" },
  { label: "Contato", href: "#contato" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0.5 left-0 right-0 z-50 bg-white transition-all duration-700"
      style={{
        boxShadow: scrolled
          ? "0 2px 24px rgba(74,18,25,0.10)"
          : "0 1px 0 rgba(201,168,76,0.35)",
        padding: scrolled ? "8px 0" : "12px 0",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group select-none">
          <div className="transition-transform duration-300 group-hover:scale-105">
            <LogoMark size={34} crossColor="#6B1E2A" heartColor="#C9A84C" fillOpacity={0.1} />
          </div>
          <span className="font-serif leading-tight">
            <span className="text-[#6B1E2A] font-semibold text-lg tracking-wide">Círculo </span>
            <em className="text-[#C9A84C] font-normal text-base not-italic italic">Newman</em>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="gold-link text-[#4A1219]/70 hover:text-[#6B1E2A] text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className="block h-px bg-[#6B1E2A] transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }}
            />
            <span
              className="block h-px bg-[#6B1E2A] transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-px bg-[#6B1E2A] transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: menuOpen ? "280px" : "0px",
          transition: "max-height 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div
          className="px-6 py-5 flex flex-col gap-5 border-t"
          style={{ borderColor: "rgba(201,168,76,0.2)", background: "#FDFAF7" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#4A1219]/75 hover:text-[#C9A84C] text-sm font-medium tracking-widest uppercase transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
