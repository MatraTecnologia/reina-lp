'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const STATS = [
  { end: 10,  suffix: '+', label: 'Anos de Experiência' },
  { end: 500, suffix: '+', label: 'Veículos Atendidos'  },
  { end: 100, suffix: '%', label: 'Satisfação Garantida' },
]

export default function CounterStats() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const els = container.current?.querySelectorAll<HTMLElement>('.stat-val')
    if (!els) return

    STATS.forEach((stat, i) => {
      const el = els[i]
      const obj = { val: 0 }

      gsap.to(obj, {
        val: stat.end,
        duration: 2,
        ease: 'power2.out',
        delay: i * 0.15,
        onUpdate() {
          el.textContent = Math.round(obj.val) + stat.suffix
        },
        scrollTrigger: {
          trigger: container.current,
          start: 'top 82%',
          once: true,
        },
      })
    })

    // Fade-in das cards
    gsap.from('.stat-card', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 82%',
        once: true,
      },
    })
  }, { scope: container })

  return (
    <div
      ref={container}
      className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#1e1e1e]"
    >
      {STATS.map((s) => (
        <div key={s.label} className="stat-card text-center py-8 px-8">
          <div className="font-bebas text-5xl text-[#D01C1C] leading-none stat-val">
            0{s.suffix}
          </div>
          <div className="text-[#A0A0A0] text-xs uppercase tracking-[0.2em] mt-2">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
