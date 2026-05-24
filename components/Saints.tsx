import Image from "next/image";
import AnimateIn from "./AnimateIn";

const saints = [
  {
    name: "São Filipe Neri",
    dates: "1515 – 1595",
    feast: "26 de maio",
    role: "Padroeiro Principal",
    subtitle: "O Apóstolo de Roma",
    photo: "/images/filipe-neri.jpg",
    photoAlt: "Retrato de São Filipe Neri — Metropolitan Museum of Art, séc. XVII",
    objectPosition: "center 30%",
    bio: [
      "Filipe Neri chegou a Roma aos dezoito anos e viveu durante décadas como leigo, visitando enfermos e conversando pelas ruas. Fundou os Oratórios — reuniões de leigos e sacerdotes para oração, música, leituras e partilha fraterna.",
      "Sua espiritualidade era marcada por uma alegria quase escandalosa. Ria, brincava, e ao mesmo tempo conduzia almas à profunda intimidade com Deus.",
    ],
    quote: "A alegria é o sinal mais certo da presença de Deus.",
    accent: "#6B1E2A",
  },
  {
    name: "São John Henry Newman",
    dates: "1801 – 1890",
    feast: "9 de outubro",
    role: "Co-padroeiro",
    subtitle: "O Cardeal da Consciência",
    photo: "/images/newman.jpg",
    photoAlt: "Fotografia de São John Henry Newman, 1887",
    objectPosition: "center 15%",
    bio: [
      "Newman foi um dos mais brilhantes intelectuais católicos do século XIX. Anglicano e professor em Oxford, converteu-se ao catolicismo em 1845 após anos de estudo honesto. Entrou exatamente no Oratório de São Filipe Neri.",
      "Seu lema “Cor ad cor loquitur” — coração fala ao coração — resume sua convicção de que o encontro com a verdade é sempre pessoal. Canonizado por Francisco em 2019.",
    ],
    quote: "Cor ad cor loquitur. Coração fala ao coração.",
    accent: "#4A1219",
  },
];

export default function Saints() {
  return (
    <section id="padroeiros" style={{ background: "#EDE6DA" }} className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Nossa herança espiritual
          </p>
          <h2
            className="font-serif text-[#4A1219] font-semibold mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Os Santos Padroeiros
          </h2>
          <div className="section-ornament">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C]" />
          </div>
          <p className="mt-6 text-[#6B5A4E] max-w-xl mx-auto leading-relaxed text-sm">
            Há uma linhagem real entre eles: Newman entrou no Oratório fundado por
            Filipe e escreveu profundamente sobre ele. Juntos, cobrem os três pilares do grupo.
          </p>
        </AnimateIn>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {saints.map((saint, i) => (
            <AnimateIn key={saint.name} direction={i === 0 ? "left" : "right"} delay={i * 120}>
              <div
                className="card-hover flex flex-col overflow-hidden shadow-sm"
                style={{ background: "#F8F4EF" }}
              >
                {/* Photo */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={saint.photo}
                    alt={saint.photoAlt}
                    fill
                    className="object-cover"
                    style={{
                      objectPosition: saint.objectPosition,
                      filter: "sepia(15%) contrast(1.05) brightness(0.95)",
                    }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gradient overlay bottom */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, transparent 25%, ${saint.accent}BB 70%, ${saint.accent}F0 100%)`,
                    }}
                  />
                  {/* Name on photo */}
                  <div className="absolute bottom-5 left-6 right-6 text-white">
                    <div className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase mb-1">
                      {saint.role}
                    </div>
                    <h3 className="font-serif text-2xl font-semibold leading-tight">
                      {saint.name}
                    </h3>
                    <p className="italic text-white/65 text-sm mt-1">{saint.subtitle}</p>
                  </div>
                </div>

                {/* Info strip */}
                <div
                  className="px-6 py-3 flex items-center gap-4 text-white/80 text-xs"
                  style={{ background: saint.accent }}
                >
                  <span>✦ {saint.dates}</span>
                  <span className="text-white/40">·</span>
                  <span>Festa: {saint.feast}</span>
                </div>

                {/* Content */}
                <div className="px-7 py-7 flex flex-col gap-5 flex-1">
                  <div className="space-y-3">
                    {saint.bio.map((para, j) => (
                      <p key={j} className="text-[#2D1B0E]/70 leading-relaxed text-sm">
                        {para}
                      </p>
                    ))}
                  </div>
                  <blockquote className="border-l-2 border-[#C9A84C] pl-4 mt-auto pt-2">
                    <p className="font-serif italic text-[#4A1219] text-base leading-snug">
                      &ldquo;{saint.quote}&rdquo;
                    </p>
                  </blockquote>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Connection note */}
        <AnimateIn delay={200}>
          <div
            className="py-8 px-8 text-center border"
            style={{
              borderColor: "rgba(201,168,76,0.25)",
              background: "rgba(201,168,76,0.05)",
            }}
          >
            <p className="text-[#6B5A4E] text-sm leading-relaxed italic max-w-2xl mx-auto">
              &ldquo;A conexão não é acidental: quando Newman se converteu, escolheu
              exatamente o Oratório de São Filipe Neri como lar espiritual — porque
              reconheceu ali a mesma espiritualidade leiga, intelectual e fraterna que buscava.&rdquo;
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
