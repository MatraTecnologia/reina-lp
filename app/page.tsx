import Image from "next/image";
import WhatsAppFloat from "./components/WhatsAppFloat";

const WA_NUMBER = "5543996231475";
const WA_MSG = encodeURIComponent(
  "Olá! Gostaria de agendar um serviço de detailing."
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const SERVICOS = [
  {
    img: "/lavagem-detalhada.png",
    title: "Lavagem Detalhada",
    desc: "Chassi e motor, retirada das rodas, compartimento de combustível, lavagem com Shampoo PH neutro, aplicação de PPF para conservação, polimento de farol e vidros.",
  },
  {
    img: "/lavagem-moto.png",
    title: "Lavagem de Motos e Jet Sky",
    desc: "Motos de Alta Cilindrada, Tricícloe e Jet Sky com produtos ecologicamente corretos. Polimento técnico com opções de cristalização, selante ou vitrificação.",
  },
  {
    img: "/limpeza-banco.png",
    title: "Higienização e Hidratação",
    desc: "Higienização interna completa, limpeza de painel com pincel, hidratação em bancos de couro e Oxi-sanatização para eliminar odores, bactérias e fungos.",
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
        <path d="M12 13a3 3 0 100-6 3 3 0 000 6z" />
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

const GALERIA = [
  "/detalhamento-carro.png",
  "/garagem-luxo.png",
  "/lavagem-moto.png",
  "/lavagem-detalhada.png",
  "/limpeza-banco.png",
  "/hero.png",
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

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <Image
          src="/hero.png"
          alt="Reina Studio Car Detailing"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <p className="text-[#D01C1C] text-xs font-semibold tracking-[0.4em] uppercase mb-6">
            Reina Studio Car Detailing — Londrina, PR
          </p>
          <h1 className="font-bebas leading-none mb-6" style={{ fontSize: 'clamp(60px, 10vw, 130px)' }}>
            SEU CARRO<br />
            MERECE<br />
            <span className="text-[#D01C1C]">O MELHOR.</span>
          </h1>
          <p className="text-[#A0A0A0] text-lg max-w-md mb-10 leading-relaxed">
            Detailing profissional com quem é apaixonado por carros como você.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#D01C1C] hover:bg-[#FF2020] text-white font-semibold px-8 py-4 text-base transition-colors"
            >
              Falar no WhatsApp
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 border border-[#444] hover:border-white text-[#A0A0A0] hover:text-white font-medium px-8 py-4 text-base transition-colors"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#111] border-y border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#1e1e1e]">
          {[
            { num: "10+", label: "Anos de Experiência" },
            { num: "500+", label: "Veículos Atendidos" },
            { num: "100%", label: "Satisfação Garantida" },
          ].map((s) => (
            <div key={s.label} className="text-center py-8 px-8">
              <div className="font-bebas text-5xl text-[#D01C1C] leading-none">{s.num}</div>
              <div className="text-[#A0A0A0] text-xs uppercase tracking-[0.2em] mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#D01C1C] text-xs font-semibold tracking-[0.4em] uppercase mb-5">
            Sobre nós
          </p>
          <h2 className="font-bebas leading-tight mb-6" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
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
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#D01C1C] text-[#D01C1C] hover:bg-[#D01C1C] hover:text-white px-7 py-3 transition-colors font-medium text-sm"
          >
            Agendar agora →
          </a>
        </div>
        <div className="relative h-96 overflow-hidden">
          <Image
            src="/garagem-luxo.png"
            alt="Garagem Reina Studio"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#D01C1C]/40" />
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="bg-[#0D0D0D] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#D01C1C] text-xs font-semibold tracking-[0.4em] uppercase mb-4">
              O que fazemos
            </p>
            <h2 className="font-bebas" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
              NOSSOS SERVIÇOS
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {SERVICOS.map((s) => (
              <div
                key={s.title}
                className="group bg-[#111] border border-[#1e1e1e] hover:border-[#D01C1C]/40 transition-all duration-300 overflow-hidden flex flex-col"
              >
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
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D01C1C] text-sm font-semibold hover:text-white transition-colors"
                  >
                    Solicitar serviço →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center border border-[#1e1e1e] py-5 px-8">
            <p className="text-[#A0A0A0] text-sm">
              Também: Martelinho de Ouro · Polimento de Farol e Vidro · Restauração e Pintura de Rodas · Remoção de Cheiros (Oxi-sanatização) · Vitrificação
            </p>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#D01C1C] text-xs font-semibold tracking-[0.4em] uppercase mb-4">
            Diferenciais
          </p>
          <h2 className="font-bebas" style={{ fontSize: 'clamp(36px, 5vw, 66px)' }}>
            POR QUE ESCOLHER A REINA?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {DIFERENCIAIS.map((d) => (
            <div
              key={d.title}
              className="border border-[#1e1e1e] p-8 hover:border-[#D01C1C]/40 transition-all group"
            >
              <div className="mb-5">{d.icon}</div>
              <h3 className="font-bebas text-2xl mb-3 group-hover:text-[#D01C1C] transition-colors">
                {d.title}
              </h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALERIA ── */}
      <section className="bg-[#0D0D0D] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#D01C1C] text-xs font-semibold tracking-[0.4em] uppercase mb-4">
              Galeria
            </p>
            <h2 className="font-bebas" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
              NOSSO TRABALHO
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {GALERIA.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group">
                <Image
                  src={img}
                  alt="Reina Studio Car Detailing"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-[#D01C1C]/10 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/detalhamento-carro.png" alt="" fill className="object-cover opacity-10" />
        </div>
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#D01C1C] text-xs font-semibold tracking-[0.4em] uppercase mb-6">
            Agende agora
          </p>
          <h2 className="font-bebas leading-none mb-4" style={{ fontSize: 'clamp(50px, 8vw, 100px)' }}>
            PRONTO PARA<br />
            <span className="text-[#D01C1C]">TRANSFORMAR</span><br />
            SEU CARRO?
          </h2>
          <p className="text-[#A0A0A0] mb-10 text-lg">
            Buscamos e levamos seu veículo. Fale com a gente agora!
          </p>
          <a
            href={WA_LINK}
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
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0D0D0D] border-t border-[#1e1e1e] py-14 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <Image
              src="/logo.webp"
              alt="Reina Studio Car Detailing"
              width={100}
              height={33}
              className="mb-4"
            />
            <p className="text-[#555] text-sm leading-relaxed">
              Especializada em cuidar do seu carro em Londrina-PR.
            </p>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
              Onde estamos
            </h4>
            <p className="text-[#666] text-sm leading-loose">
              Av Duque de Caxias, 1933<br />
              Jardim Londrilar<br />
              Londrina — PR
            </p>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
              Contato
            </h4>
            <a
              href="tel:4399623-1475"
              className="block text-[#666] hover:text-white text-sm transition-colors mb-3"
            >
              Fone: 43 99623-1475
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D01C1C] hover:text-white text-sm transition-colors font-medium"
            >
              WhatsApp →
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-[#1a1a1a] text-center">
          <p className="text-[#333] text-xs">
            © 2026 Reina Studio Car Detailing. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <WhatsAppFloat link={WA_LINK} />
    </div>
  );
}
