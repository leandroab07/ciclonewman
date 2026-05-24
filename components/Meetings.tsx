import AnimateIn from "./AnimateIn";
import { BookIcon, FlameIcon, TableIcon } from "./Icons";

const pillars = [
  {
    icon: <BookIcon className="w-9 h-9" />,
    title: "Intelectualidade",
    accent: "#6B1E2A",
    text: "Lemos juntos. Debatemos. Levamos a fé a sério como questão intelectual. Newman nos ensinou que a mente também adora.",
    items: ["Leituras comentadas", "Debates filosóficos e teológicos", "Formação permanente"],
  },
  {
    icon: <FlameIcon className="w-9 h-9" />,
    title: "Espiritualidade",
    accent: "#4A1219",
    text: "A vida interior é o centro de tudo. Rezamos, escutamos, descemos ao silêncio. Filipe Neri dizia que sem oração, a alegria não tem raiz.",
    items: ["Oração em comum", "Lectio divina", "Retiros espirituais"],
  },
  {
    icon: <TableIcon className="w-9 h-9" />,
    title: "Convivência",
    accent: "#7A2233",
    text: "Cozinhamos juntos. Partilhamos refeições. Falamos de nossas vidas. A mesa é lugar teológico — Betânia nos ensina isso.",
    items: ["Refeições partilhadas", "Retiros comunitários", "Ajuda mútua"],
  },
];

export default function Meetings() {
  return (
    <section id="encontros" className="py-28 px-6" style={{ background: "#F8F4EF" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Como vivemos
          </p>
          <h2
            className="font-serif text-[#4A1219] font-semibold mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Nossos Encontros
          </h2>
          <div className="section-ornament">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C]" />
          </div>
          <p className="mt-6 text-[#6B5A4E] max-w-md mx-auto leading-relaxed text-sm">
            Cada encontro combina os três pilares em proporções que variam. Não há fórmula rígida.
          </p>
        </AnimateIn>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p, i) => (
            <AnimateIn key={p.title} delay={i * 120}>
              <div
                className="card-hover group flex flex-col p-8 h-full cursor-default"
                style={{ background: "#EDE6DA" }}
              >
                {/* Icon */}
                <div
                  className="mb-6 p-3 inline-flex transition-colors duration-300"
                  style={{ color: p.accent, background: "rgba(107,30,42,0.08)" }}
                  aria-hidden
                >
                  {p.icon}
                </div>

                <h3 className="font-serif text-[#4A1219] text-xl font-semibold mb-3">
                  {p.title}
                </h3>
                <p className="text-[#6B5A4E] text-sm leading-relaxed mb-6 flex-1">
                  {p.text}
                </p>

                <ul className="space-y-2 border-t border-[#C9A84C]/20 pt-4">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#2D1B0E]/65">
                      <span style={{ color: p.accent }} className="text-xs">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Quote banner */}
        <AnimateIn delay={150}>
          <div
            className="py-14 px-8 md:px-20 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #6B1E2A 0%, #4A1219 100%)" }}
          >
            {/* Decorative dots */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative z-10">
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-6">
                São Filipe Neri
              </p>
              <blockquote
                className="font-serif text-white italic leading-relaxed"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)" }}
              >
                &ldquo;A alegria é a rede com a qual pescamos as almas.&rdquo;
              </blockquote>
              <div className="mt-6 section-ornament justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/60" />
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
