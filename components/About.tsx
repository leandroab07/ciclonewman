import AnimateIn from "./AnimateIn";
import { CorAdCor } from "./Icons";

const pillars = [
  { icon: "📖", title: "Intelectualidade", text: "Leituras, debates e aprofundamento da fé. A verdade não teme perguntas." },
  { icon: "🕊️", title: "Espiritualidade", text: "Oração, lectio divina e silêncio. A vida interior como centro de tudo." },
  { icon: "🍞", title: "Convivência", text: "Refeições partilhadas, retiros e partilha da vida concreta." },
];

const stats = [
  { number: "~6", label: "Membros" },
  { number: "2", label: "Padroeiros" },
  { number: "3", label: "Pilares" },
];

export default function About() {
  return (
    <section id="sobre" className="py-28 px-6" style={{ background: "#F8F4EF" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Quem somos
          </p>
          <h2
            className="font-serif text-[#4A1219] font-semibold mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Um Círculo de Amigos
            <br />
            <em className="font-normal text-[#6B1E2A]">que buscam a Deus</em>
          </h2>
          <div className="flex justify-center mt-2">
            <CorAdCor size={80} heartColor="#C9A84C" crossColor="#6B1E2A" />
          </div>
        </AnimateIn>

        {/* Body */}
        <div className="grid md:grid-cols-2 gap-14 items-start mb-20">
          {/* Text */}
          <AnimateIn direction="left" delay={100}>
            <div className="space-y-6 text-[#2D1B0E]/75 leading-relaxed text-lg">
              <p>
                O Círculo Newman é uma pequena comunidade de leigos católicos
                inspirada na fraternidade que São Filipe Neri reuniu em Roma no
                século XVI — e que São John Henry Newman transplantou para a
                Inglaterra três séculos depois.
              </p>
              <p>
                Somos cerca de seis membros que se encontram regularmente para
                conversar sobre fé, cultura e vida. Cozinhamos juntos. Lemos e
                debatemos. Rezamos. E partilhamos o que vai bem — e o que não vai —
                em nossas vidas.
              </p>
              <p className="font-serif italic text-[#6B1E2A] text-xl">
                Não somos um movimento. Somos amigos em caminho.
              </p>
            </div>
          </AnimateIn>

          {/* Pillars */}
          <div className="space-y-4">
            {pillars.map((item, i) => (
              <AnimateIn key={item.title} direction="right" delay={120 * (i + 1)}>
                <div
                  className="card-hover flex gap-4 p-5 border-l-2 border-[#C9A84C] cursor-default"
                  style={{ background: "#EDE6DA" }}
                >
                  <span className="text-2xl mt-0.5 select-none">{item.icon}</span>
                  <div>
                    <h3 className="font-serif text-[#4A1219] font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#6B5A4E] text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Stats */}
        <AnimateIn delay={200}>
          <div className="grid grid-cols-3 gap-6 border-t border-[#C9A84C]/30 pt-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center group cursor-default">
                <div
                  className="font-serif text-[#C9A84C] font-semibold transition-all duration-300 group-hover:scale-110"
                  style={{
                    fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                    display: "inline-block",
                    transformOrigin: "center",
                  }}
                >
                  {s.number}
                </div>
                <div className="text-[#6B5A4E] text-xs tracking-[0.2em] uppercase mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
