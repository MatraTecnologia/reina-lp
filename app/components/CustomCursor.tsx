'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ringX = 0
    let ringY = 0
    let dotX = 0
    let dotY = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX
      dotY = e.clientY
    }

    const animate = () => {
      // Dot segue o mouse na hora
      if (dot.current) {
        dot.current.style.left = dotX + 'px'
        dot.current.style.top  = dotY + 'px'
      }

      // Ring suaviza com lerp
      ringX += (dotX - ringX) * 0.12
      ringY += (dotY - ringY) * 0.12

      if (ring.current) {
        ring.current.style.left = ringX + 'px'
        ring.current.style.top  = ringY + 'px'
      }

      raf = requestAnimationFrame(animate)
    }

    const onEnterLink = () => {
      ring.current?.classList.add('cursor-hover')
      dot.current?.classList.add('cursor-hover')
    }
    const onLeaveLink = () => {
      ring.current?.classList.remove('cursor-hover')
      dot.current?.classList.remove('cursor-hover')
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Ponto vermelho — segue exato */}
      <div
        ref={dot}
        className="fixed z-[99999] pointer-events-none rounded-full bg-[#D01C1C] transition-transform duration-100"
        style={{
          width: 8,
          height: 8,
          transform: 'translate(-50%, -50%)',
          top: -20,
          left: -20,
        }}
      />

      {/* Anel — segue com lag */}
      <div
        ref={ring}
        className="fixed z-[99998] pointer-events-none rounded-full border border-[#D01C1C]/70"
        style={{
          width: 36,
          height: 36,
          transform: 'translate(-50%, -50%)',
          top: -40,
          left: -40,
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
        }}
      />

      <style>{`
        .cursor-hover ~ div,
        div.cursor-hover {
          width: 52px !important;
          height: 52px !important;
          border-color: rgba(208,28,28,1) !important;
        }
      `}</style>
    </>
  )
}
