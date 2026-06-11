'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'

interface Props {
  before: string
  after: string
  label?: string
}

export default function BeforeAfterSlider({ before, after, label }: Props) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const onMouseDown = () => { isDragging.current = true }
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX)
  }
  const onTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX)
  }

  useEffect(() => {
    const stop = () => { isDragging.current = false }
    window.addEventListener('mouseup', stop)
    return () => window.removeEventListener('mouseup', stop)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden cursor-ew-resize select-none"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
    >
      {/* DEPOIS — base */}
      <div className="absolute inset-0">
        <Image src={after} alt="Depois do detailing" fill className="object-cover" />
      </div>

      {/* ANTES — clipado pela posição */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <div className="absolute inset-0" style={{ width: containerRef.current?.offsetWidth ?? '100%' }}>
          <Image src={before} alt="Antes do detailing" fill className="object-cover" />
        </div>
      </div>

      {/* Linha divisória */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/80 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        {/* Handle circular */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-2xl flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D01C1C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 15 12 9 6" style={{ transform: 'translateX(0px)' }} />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/75 text-white text-xs font-bold px-3 py-1.5 uppercase tracking-widest pointer-events-none">
        Antes
      </div>
      <div className="absolute top-4 right-4 bg-[#D01C1C] text-white text-xs font-bold px-3 py-1.5 uppercase tracking-widest pointer-events-none">
        Depois
      </div>

      {label && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs pointer-events-none whitespace-nowrap">
          {label}
        </div>
      )}
    </div>
  )
}
