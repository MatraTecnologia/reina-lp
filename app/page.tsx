import Image from "next/image";
import WhatsAppFloat from "./components/WhatsAppFloat";
import HeroAnimated from "./components/HeroAnimated";
import ScrollReveal from "./components/ScrollReveal";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import CounterStats from "./components/CounterStats";

const WA_NUMBER = "5543996231475";

function waLink(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const WA_GERAL = waLink("Olá! Gostaria de agendar um serviço de detailing.");

const SERVICOS = [
  {
    img: "/galeria-reina/DSC05056.jpg",
    title: "Lavagem Detalhada",
    desc: "Chassi e motor, retirada das rodas, compartimento de combustível, lavagem com Shampoo PH neutro, aplicação de PPF para conservação, polimento de farol e vidros.",
    wa: waLink("Olá! Tenho interesse na Lavagem Detalhada. Pode me passar mais informações?"),
  },
  {
    img: "/galeria-reina/DSC05203.jpg",
    title: "Lavagem de Motos e Jet Sky",
    desc: "Motos de Alta Cilindrada, Tricícloe e Jet Sky com produtos ecologicamente corretos. Polimento técnico com opções de cristalização, selante ou vitrificação.",
    wa: waLink("Olá! Tenho interesse na Lavagem de Moto / Jet Sky. Pode me passar mais informações?"),
  },
  {
    img: "/galeria-reina/DSC05189.jpg",
    title: "Higienização e Hidratação",
    desc: "Higienização interna completa, limpeza de painel com pincel, hidratação em bancos de couro e Oxi-sanatização para eliminar odores, bactérias e fungos.",
    wa: waLink("Olá! Tenho interesse na Higienização e Hidratação de bancos. Pode me passar mais informações?"),
  },
];

const DIFERENCIAIS = [
  {
    title: "Buscamos Seu Veículo",
    desc: "Se você precisar, buscamos e levamos seu veículo para que você desfrute dos nossos serviços aproveitando seu tempo ao máximo.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D01C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3" />
        <rect x="9" y="11" width="14" height="10" rx="2" />
        <circle cx="12" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
      </svg>
    ),
  },
  {
    title: "Produtos Ecológicos",
    desc: "Utilizamos apenas produtos ecologicamente corretos, preservando seu veículo e o meio ambiente em cada detalhe do serviço.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D01C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Perfeccionismo Total",
    desc: "Cada detalhe importa. Vinícius Reina é um perfeccionista que trata cada veículo com a mesma paixão e cuidado que daria ao seu próprio carro.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D01C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const PROCESSO = [
  {
    num: "01",
    title: "Agendamento",
    desc: "Fale com a gente via WhatsApp e escolha o melhor horário. Simples e rápido.",
  },
  {
    num: "02",
    title: "Buscamos seu veículo",
    desc: "Se precisar, buscamos e devolvemos seu veículo sem custo adicional.",
  },
  {
    num: "03",
    title: "Serviço Premium",
    desc: "Cuidamos de cada detalhe com produtos de alta qualidade e técnica profissional.",
  },
  {
    num: "04",
    title: "Entrega Perfeita",
    desc: "Seu veículo devolvido impecável. Satisfação garantida em cada serviço.",
  },
];

const GALERIA = [
  "/galeria-reina/DSC05051.jpg",
  "/galeria-reina/DSC05052.jpg",
  "/galeria-reina/DSC05056.jpg",
  "/galeria-reina/DSC05091.jpg",
  "/galeria-reina/DSC05099.jpg",
  "/galeria-reina/DSC05134.jpg",
  "/galeria-reina/DSC05176.jpg",
  "/galeria-reina/DSC05075.jpg",
  "/galeria-reina/DSC05203.jpg",
];

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] text-white overflow-x-hidden">

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Image
            src="/logo.webp"
            alt="Reina Studio Car Detailing"
            width={110}
            height={36}
            className="h-9 w-auto"
            priority
          />
          <a
            href="tel:4399623-1475"
            className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors tracking-wide"
          >
            Fone: <span className="text-white">43 99623-1475</span>
          </a>
        </div>
      </header>

      {/* ── HERO (vídeo + GSAP) ── */}
      <HeroAnimated waLink={WA_GERAL} />

      {/* ── STATS com contador animado ── */}
      <section className="bg-[#111] border-y border-[#1e1e1e]">
        <CounterStats />
      </section>

      {/* ── SOBRE ── */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <p className="text-[#D01C1C] text-xs font-semibold tracking-[0.4em] uppercase mb-5">
            Sobre nós
          </p>
          <h2 className="font-bebas leading-tight mb-6" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
            ESPECIALIZADA EM<br />
            <span className="text-[#D01C1C]">CUIDAR DO SEU CARRO</span>
          </h2>
          <p className="text-[#A0A0A0] leading-relaxed mb-4">
            Se você é apaixonado por seu carro, deixe ele aos cuidados de quem também é. O{" "}
            <strong className="text-white">Reina Studio Car Detailing</strong> foi criado por{" "}
            <strong className="text-white">Vinícius Reina</strong>, um perfeccionista em detalhes
            e apaixonado por carros e motos.
          </p>
          <p className="text-[#A0A0A0] leading-relaxed mb-10">
            Somos especializados em higienização, hidratação de couro, lavagem detalhada de chassi,
            polimento técnico, vitrificação e muito mais. Traga seu veículo e comprove a diferença.
          </p>
          <a
            href={WA_GERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#D01C1C] text-[#D01C1C] hover:bg-[#D01C1C] hover:text-white px-7 py-3 transition-colors font-medium text-sm"
          >
            Agendar agora →
          </a>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="relative h-96 overflow-hidden">
            <Image src="/galeria-reina/DSC05091.jpg" alt="Vinícius Reina — Fundador" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-[#D01C1C]/40" />
          </div>
        </ScrollReveal>
      </section>

      {/* ── ANTES & DEPOIS ── */}
      <section className="bg-[#0D0D0D] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-[#D01C1C] text-xs font-semibold tracking-[0.4em] uppercase mb-4">
                Resultados reais
              </p>
              <h2 className="font-bebas" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
                ANTES & DEPOIS
              </h2>
              <p className="text-[#A0A0A0] mt-3 text-sm">
                Arraste o slider para ver a transformação
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={0}>
              <div className="overflow-hidden border border-[#1e1e1e]">
                <BeforeAfterSlider
                  before="/suv-antes.png"
                  after="/suv-depois.png"
                  label="Exterior — Lavagem Detalhada"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="overflow-hidden border border-[#1e1e1e]">
                <BeforeAfterSlider
                  before="/interior-sujo.png"
                  after="/interior-limpo.png"
                  label="Interior — Higienização Completa"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1}>
            <div className="text-center mt-10">
              <a
                href={WA_GERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#D01C1C] hover:bg-[#FF2020] text-white font-semibold px-8 py-4 transition-colors"
              >
                Quero esse resultado →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#D01C1C] text-xs font-semibold tracking-[0.4em] uppercase mb-4">
                O que fazemos
              </p>
              <h2 className="font-bebas" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
                NOSSOS SERVIÇOS
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {SERVICOS.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.15} y={50}>
                <div className="group bg-[#111] border border-[#1e1e1e] hover:border-[#D01C1C]/40 transition-all duration-300 overflow-hidden flex flex-col h-full">
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bebas text-2xl mb-3 group-hover:text-[#D01C1C] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                    <a
                      href={s.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#D01C1C] text-sm font-semibold hover:text-white transition-colors"
                    >
                      Solicitar este serviço →
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.1}>
            <div className="mt-10 text-center border border-[#1e1e1e] py-5 px-8">
              <p className="text-[#A0A0A0] text-sm">
                Também: Martelinho de Ouro · Polimento de Farol e Vidro · Restauração de Rodas · Remoção de Cheiros (Oxi-sanatização) · Vitrificação
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section className="bg-[#0D0D0D] py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-[#D01C1C] text-xs font-semibold tracking-[0.4em] uppercase mb-5">
              Processo
            </p>
            <h2 className="font-bebas leading-tight mb-12" style={{ fontSize: "clamp(38px, 5vw, 62px)" }}>
              COMO FUNCIONA<br />
              <span className="text-[#D01C1C]">NA PRÁTICA?</span>
            </h2>
            <div className="space-y-8">
              {PROCESSO.map((p, i) => (
                <ScrollReveal key={p.num} delay={i * 0.1} y={24}>
                  <div className="flex gap-6 items-start group">
                    <span className="font-bebas text-4xl text-[#D01C1C]/30 group-hover:text-[#D01C1C] transition-colors leading-none flex-shrink-0 w-12">
                      {p.num}
                    </span>
                    <div>
                      <h3 className="font-bebas text-xl mb-1 group-hover:text-[#D01C1C] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-[#A0A0A0] text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <div className="mt-12">
              <a
                href={WA_GERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#D01C1C] text-[#D01C1C] hover:bg-[#D01C1C] hover:text-white px-7 py-3 transition-colors font-medium text-sm"
              >
                Começar agora →
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative h-[520px] overflow-hidden">
              <Image
                src="/galeria-reina/DSC05052.jpg"
                alt="Estúdio Reina — Processo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0D0D0D]/60" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── DIFERENCIAIS ── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-[#D01C1C] text-xs font-semibold tracking-[0.4em] uppercase mb-4">
              Diferenciais
            </p>
            <h2 className="font-bebas" style={{ fontSize: "clamp(36px, 5vw, 66px)" }}>
              POR QUE ESCOLHER A REINA?
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {DIFERENCIAIS.map((d, i) => (
            <ScrollReveal key={d.title} delay={i * 0.15} y={40}>
              <div className="border border-[#1e1e1e] p-8 hover:border-[#D01C1C]/40 transition-all group h-full">
                <div className="mb-5">{d.icon}</div>
                <h3 className="font-bebas text-2xl mb-3 group-hover:text-[#D01C1C] transition-colors">
                  {d.title}
                </h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed">{d.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── GALERIA ── */}
      <section className="bg-[#0D0D0D] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#D01C1C] text-xs font-semibold tracking-[0.4em] uppercase mb-4">
                Galeria
              </p>
              <h2 className="font-bebas" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
                NOSSO TRABALHO
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {GALERIA.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.06} y={30}>
                <div className="relative aspect-square overflow-hidden group">
                  <Image
                    src={img}
                    alt="Reina Studio Car Detailing"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-[#D01C1C]/10 transition-all duration-300" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/galeria-reina/DSC05051.jpg" alt="" fill className="object-cover opacity-10" />
        </div>
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />
        <ScrollReveal>
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-[#D01C1C] text-xs font-semibold tracking-[0.4em] uppercase mb-6">
              Agende agora
            </p>
            <h2 className="font-bebas leading-none mb-4" style={{ fontSize: "clamp(50px, 8vw, 100px)" }}>
              PRONTO PARA<br />
              <span className="text-[#D01C1C]">TRANSFORMAR</span><br />
              SEU CARRO?
            </h2>
            <p className="text-[#A0A0A0] mb-10 text-lg">
              Buscamos e levamos seu veículo. Fale com a gente agora!
            </p>
            <a
              href={WA_GERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#D01C1C] hover:bg-[#FF2020] text-white font-bold px-12 py-5 text-lg transition-colors"
            >
              Chamar no WhatsApp
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0D0D0D] border-t border-[#1e1e1e] py-14 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <Image src="/logo.webp" alt="Reina Studio Car Detailing" width={100} height={33} className="mb-4" />
            <p className="text-[#555] text-sm leading-relaxed">
              Especializada em cuidar do seu carro em Londrina-PR.
            </p>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Onde estamos</h4>
            <p className="text-[#666] text-sm leading-loose">
              Av Duque de Caxias, 1933<br />
              Jardim Londrilar<br />
              Londrina — PR
            </p>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Contato</h4>
            <a href="tel:4399623-1475" className="block text-[#666] hover:text-white text-sm transition-colors mb-3">
              Fone: 43 99623-1475
            </a>
            <a
              href={WA_GERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D01C1C] hover:text-white text-sm transition-colors font-medium"
            >
              WhatsApp →
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-[#1a1a1a] text-center">
          <p className="text-[#333] text-xs">© 2026 Reina Studio Car Detailing. Todos os direitos reservados.</p>
        </div>
      </footer>

      <WhatsAppFloat link={WA_GERAL} />
    </div>
  );
}
