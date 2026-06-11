'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot  = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const hovered = useRef(false)

  useEffect(() => {
    // Esconde cursor nativo em todo o documento
    document.documentElement.style.cursor = 'none'

    let ringX = 0, ringY = 0, dotX = 0, dotY = 0
    let raf: number
    let visible = false

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX
      dotY = e.clientY

      if (!visible) {
        visible = true
        if (dot.current)  dot.current.style.opacity  = '1'
        if (ring.current) ring.current.style.opacity = '1'
      }
    }

    const animate = () => {
      if (dot.current) {
        dot.current.style.left = dotX + 'px'
        dot.current.style.top  = dotY + 'px'
      }

      ringX += (dotX - ringX) * 0.10
      ringY += (dotY - ringY) * 0.10

      if (ring.current) {
        ring.current.style.left = ringX + 'px'
        ring.current.style.top  = ringY + 'px'
      }

      raf = requestAnimationFrame(animate)
    }

    // Event delegation — captura qualquer botão/link incluindo os criados depois do mount
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button, [data-cursor]')) {
        if (hovered.current) return
        hovered.current = true

        if (dot.current) {
          dot.current.style.transform = 'translate(-50%, -50%) scale(0)'
          dot.current.style.opacity   = '0'
        }
        if (ring.current) {
          ring.current.style.width       = '54px'
          ring.current.style.height      = '54px'
          ring.current.style.borderColor = 'rgba(208,28,28,0.9)'
          ring.current.style.background  = 'rgba(208,28,28,0.08)'
        }
      }
    }

    const onOut = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button, [data-cursor]')) {
        hovered.current = false

        if (dot.current) {
          dot.current.style.transform = 'translate(-50%, -50%) scale(1)'
          dot.current.style.opacity   = '1'
        }
        if (ring.current) {
          ring.current.style.width       = '36px'
          ring.current.style.height      = '36px'
          ring.current.style.borderColor = 'rgba(208,28,28,0.55)'
          ring.current.style.background  = 'transparent'
        }
      }
    }

    document.addEventListener('mousemove',  onMove)
    document.addEventListener('mouseover',  onOver)
    document.addEventListener('mouseout',   onOut)

    raf = requestAnimationFrame(animate)

    return () => {
      document.documentElement.style.cursor = ''
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover',  onOver)
      document.removeEventListener('mouseout',   onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Ponto — segue o mouse exato */}
      <div
        ref={dot}
        style={{
          position: 'fixed',
          zIndex: 99999,
          pointerEvents: 'none',
          borderRadius: '50%',
          width: 8,
          height: 8,
          backgroundColor: '#D01C1C',
          transform: 'translate(-50%, -50%)',
          top: -20,
          left: -20,
          opacity: 0,
          transition: 'transform 0.15s ease, opacity 0.2s ease',
          willChange: 'left, top',
        }}
      />

      {/* Anel — segue com lag */}
      <div
        ref={ring}
        style={{
          position: 'fixed',
          zIndex: 99998,
          pointerEvents: 'none',
          borderRadius: '50%',
          width: 36,
          height: 36,
          border: '1.5px solid rgba(208,28,28,0.55)',
          transform: 'translate(-50%, -50%)',
          top: -40,
          left: -40,
          opacity: 0,
          transition: 'width 0.22s ease, height 0.22s ease, border-color 0.22s ease, background 0.22s ease, opacity 0.3s ease',
          willChange: 'left, top',
        }}
      />
    </>
  )
}
