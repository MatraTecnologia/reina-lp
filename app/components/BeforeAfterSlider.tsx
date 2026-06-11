'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'

interface Props {
  before: string
  after: string
  label?: string
}

export default function BeforeAfterSlider({ before, after, label }: Props) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const handleRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  // Pointer capture no handle — não interfere com scroll vertical
  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault()
    handleRef.current?.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!handleRef.current?.hasPointerCapture(e.pointerId)) return
    updatePosition(e.clientX)
  }

  const onPointerUp = (e: React.PointerEvent) => {
    handleRef.current?.releasePointerCapture(e.pointerId)
  }

  return (
    <div ref={containerRef} className="relative w-full aspect-video overflow-hidden select-none">

      {/* DEPOIS — base */}
      <div className="absolute inset-0">
        <Image src={after} alt="Depois" fill className="object-cover" />
      </div>

      {/* ANTES — clipado */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <div className="relative w-full h-full" style={{ minWidth: containerRef.current?.offsetWidth ?? 800 }}>
          <Image src={before} alt="Antes" fill className="object-cover" />
        </div>
      </div>

      {/* Linha + handle — único elemento que captura drag */}
      <div
        className="absolute top-0 bottom-0 flex items-center justify-center"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-px h-full bg-white/70 absolute" />
        <div
          ref={handleRef}
          className="relative z-10 w-11 h-11 rounded-full bg-white shadow-2xl flex items-center justify-center cursor-ew-resize touch-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D01C1C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 6 15 12 9 18" />
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
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/50 text-xs pointer-events-none whitespace-nowrap bg-black/40 px-3 py-1">
          {label}
        </div>
      )}
    </div>
  )
}
