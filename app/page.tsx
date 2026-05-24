import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Saints from "@/components/Saints";
import Meetings from "@/components/Meetings";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Círculo Newman",
  alternateName: "Circulo Newman",
  description:
    "Pequena comunidade católica de leigos, sob o patrocínio de São Filipe Neri e São John Henry Newman. Intelectualidade, espiritualidade e convivência fraterna.",
  url: "https://circulonewman.vercel.app",
  email: "circulonewman@gmail.com",
  inLanguage: "pt-BR",
  slogan: "Cor ad cor loquitur",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <About />
        <Saints />
        <Meetings />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
