'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface HeroAnimatedProps {
  waLink: string
}

export default function HeroAnimated({ waLink }: HeroAnimatedProps) {
  const container = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Reveal: overlay começa opaco e some revelando o vídeo
      tl.to('.hero-veil', { opacity: 0, duration: 1.6, ease: 'power2.inOut' })

      // Texto em sequência
      tl.from('.hero-label', { y: 20, opacity: 0, duration: 0.5 }, '-=0.7')
      tl.from('.hero-title span', { y: 80, opacity: 0, duration: 0.7, stagger: 0.13 }, '-=0.3')
      tl.from('.hero-sub',  { y: 24, opacity: 0, duration: 0.5 }, '-=0.3')
      tl.from('.hero-cta',  { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')

      // Scroll: overlay escurece levemente
      gsap.to('.hero-scroll-dark', {
        opacity: 0.6,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '50% top',
          scrub: true,
        },
      })
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      className="relative h-screen min-h-[640px] flex items-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Foto de fundo */}
      <Image
        src="/hero.png"
        alt="Reina Studio Car Detailing"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay base sempre presente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

      {/* Overlay de reveal — começa opaco e clareia com GSAP */}
      <div className="hero-veil absolute inset-0 bg-[#0A0A0A]" />

      {/* Overlay que escurece no scroll */}
      <div className="hero-scroll-dark absolute inset-0 bg-[#0A0A0A] opacity-0 pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <p className="hero-label text-[#D01C1C] text-xs font-semibold tracking-[0.4em] uppercase mb-6">
          Reina Studio Car Detailing — Londrina, PR
        </p>

        <h1 className="font-bebas leading-none mb-6" style={{ fontSize: 'clamp(60px, 10vw, 130px)' }}>
          <span className="block">SEU CARRO</span>
          <span className="block">MERECE</span>
          <span className="block text-[#D01C1C]">O MELHOR.</span>
        </h1>

        <p className="hero-sub text-[#A0A0A0] text-lg max-w-md mb-10 leading-relaxed">
          Detailing profissional com quem é apaixonado por carros como você.
        </p>

        <div className="hero-cta flex flex-wrap gap-4">
          <a
            href={waLink}
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
  )
}
