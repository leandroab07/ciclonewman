"use client";

import { useEffect, useRef } from "react";
import { LogoMark, CorAdCor } from "./Icons";

const PARTICLES = [
  { size: 4, left: "15%", delay: "0s", duration: "18s" },
  { size: 6, left: "30%", delay: "3s", duration: "22s" },
  { size: 3, left: "50%", delay: "7s", duration: "16s" },
  { size: 5, left: "68%", delay: "1s", duration: "20s" },
  { size: 4, left: "82%", delay: "5s", duration: "24s" },
  { size: 3, left: "92%", delay: "9s", duration: "18s" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
      section.style.setProperty("--mx", `${x}px`);
      section.style.setProperty("--my", `${y}px`);
    };
    section.addEventListener("mousemove", onMouseMove);
    return () => section.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="hero-bg relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: "-10px",
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      {/* Radial glow that follows mouse via CSS vars */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at calc(50% + var(--mx, 0px)) calc(50% + var(--my, 0px)), rgba(201,168,76,0.09) 0%, transparent 70%)",
          transition: "background 0.4s ease",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl mx-auto flex flex-col items-center gap-5">
        {/* Logo mark */}
        <div
          className="hero-enter hero-enter-1"
          style={{ filter: "drop-shadow(0 0 20px rgba(201,168,76,0.35))" }}
        >
          <LogoMark
            size={60}
            crossColor="#fff"
            heartColor="#C9A84C"
            fillOpacity={0.12}
          />
        </div>

        {/* Ornament */}
        <div className="hero-enter hero-enter-1 section-ornament w-full max-w-xs">
          <span className="w-2 h-2 rounded-full bg-[#C9A84C]/60" />
        </div>

        {/* Title */}
        <h1
          className="hero-enter hero-enter-2 font-serif text-white font-semibold"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", lineHeight: 1.05 }}
        >
          Círculo
          <br />
          <em className="text-[#C9A84C] not-italic" style={{ fontStyle: "italic" }}>
            Newman
          </em>
        </h1>

        {/* Latin tagline */}
        <p className="hero-enter hero-enter-3 font-serif italic text-white/65 text-xl tracking-wide">
          &ldquo;Cor ad cor loquitur&rdquo;
        </p>
        <p className="hero-enter hero-enter-3 text-white/40 text-xs tracking-[0.25em] uppercase -mt-2">
          Coração fala ao coração
        </p>

        {/* Cor ad Cor ornament */}
        <div className="hero-enter hero-enter-3 opacity-70">
          <CorAdCor size={96} heartColor="#C9A84C" crossColor="rgba(255,255,255,0.9)" />
        </div>

        {/* Description */}
        <p className="hero-enter hero-enter-4 text-white/60 text-base leading-relaxed max-w-md">
          Uma pequena comunidade de amigos que buscam a Deus juntos — no estudo,
          na oração e na convivência fraterna.
        </p>

        {/* CTA */}
        <a
          href="#sobre"
          className="hero-enter hero-enter-5 mt-2 group inline-flex items-center gap-3 px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300"
          style={{
            border: "1px solid rgba(201,168,76,0.5)",
            color: "#C9A84C",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#C9A84C";
            (e.currentTarget as HTMLElement).style.color = "#4A1219";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "#C9A84C";
          }}
        >
          Conheça-nos
          <svg
            className="transition-transform duration-300 group-hover:translate-x-1"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M7 2l5 5-5 5M2 7h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] tracking-[0.25em] uppercase">Descer</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent scroll-pulse" />
      </div>
    </section>
  );
}
