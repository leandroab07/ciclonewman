import AnimateIn from "./AnimateIn";

export default function Contact() {
  return (
    <section id="contato" className="py-28 px-6" style={{ background: "#EDE6DA" }}>
      <div className="max-w-3xl mx-auto">
        <AnimateIn className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Entre em contato
          </p>
          <h2
            className="font-serif text-[#4A1219] font-semibold mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Quer conhecer o grupo?
          </h2>
          <div className="section-ornament">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C]" />
          </div>
          <p className="mt-6 text-[#6B5A4E] leading-relaxed max-w-md mx-auto text-sm">
            Se você sente ressonância com o que leu aqui, entre em contato.
            Não há formulários nem processos formais — um papo já basta.
          </p>
        </AnimateIn>

        <AnimateIn delay={150}>
          <div
            className="p-10 shadow-sm border"
            style={{
              background: "#F8F4EF",
              borderColor: "rgba(201,168,76,0.2)",
            }}
          >
            {/* Contact info */}
            <div className="flex flex-col sm:flex-row gap-8 mb-8">
              <div className="flex-1 space-y-1">
                <p className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase">E-mail</p>
                <a
                  href="mailto:circulonewman@gmail.com"
                  className="gold-link font-serif text-[#4A1219] hover:text-[#6B1E2A] transition-colors text-lg"
                >
                  circulonewman@gmail.com
                </a>
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase">Localização</p>
                <p className="font-serif text-[#4A1219] text-lg">Brasil</p>
              </div>
            </div>

            <div
              className="border-t pt-6"
              style={{ borderColor: "rgba(201,168,76,0.2)" }}
            >
              <p className="text-[#6B5A4E] text-sm italic leading-relaxed">
                &ldquo;Antes de decidir, venha uma vez. Veja se o espírito ressoa.
                Filipe Neri nunca recrutou — ele apenas vivia de um jeito que
                fazia as pessoas quererem ficar.&rdquo;
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
