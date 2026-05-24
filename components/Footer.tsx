import { LogoMark, CorAdCor } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-14 px-6 text-center" style={{ background: "#4A1219" }}>
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-5">
        {/* Logo mark */}
        <LogoMark size={44} crossColor="rgba(255,255,255,0.9)" heartColor="#C9A84C" fillOpacity={0.1} />

        {/* Quote */}
        <p className="font-serif text-white italic text-lg">
          &ldquo;Cor ad cor loquitur&rdquo;
        </p>
        <p className="text-white/40 text-xs tracking-[0.25em] uppercase -mt-2">
          São John Henry Newman
        </p>

        {/* Cor ad Cor ornament */}
        <CorAdCor size={72} heartColor="rgba(201,168,76,0.5)" crossColor="rgba(255,255,255,0.4)" />

        <p className="text-white/25 text-xs">
          Círculo Newman © {year}
          <br />
          <span className="italic">Sub patrocinio Sancti Philippi Neri et Ioannis Henrici Newman</span>
        </p>
      </div>
    </footer>
  );
}
