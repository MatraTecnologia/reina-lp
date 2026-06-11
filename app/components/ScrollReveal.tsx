'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}

export default function ScrollReveal({ children, className = '', delay = 0, y = 40 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from(ref.current, {
        y,
        opacity: 0,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: ref }
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
