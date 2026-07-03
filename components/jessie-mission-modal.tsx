"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

interface JessieMissionModalProps {
  onClose: () => void
}

export function JessieMissionModal({ onClose }: JessieMissionModalProps) {
  useEffect(() => {
    const timer = window.setTimeout(onClose, 10000)
    return () => window.clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#123d6b]/45 px-5 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="jessie-mission-title"
    >
      <div className="relative w-full max-w-sm animate-pop-in rounded-3xl border-4 border-[#1677d2] bg-white px-5 pb-6 pt-4 text-center shadow-2xl shadow-[#123d6b]/30">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar aviso"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#1677d2] text-white shadow-md transition-transform hover:scale-105 active:scale-95"
        >
          <X className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
        </button>

 <div className="mx-auto flex h-40 max-w-[18rem] items-end justify-center gap-2 overflow-hidden">
          <Image
            src="/convite/images/woody-transparente.png"
            alt="Woody"
            width={533}
            height={468}
            priority
            className="h-32 min-w-0 flex-1 object-contain object-bottom drop-shadow-xl"
          />
          <Image
            src="/convite/images/jessie-pop-up.png"
            alt="Jessie"
            width={260}
            height={260}
            priority
            className="h-40 min-w-0 flex-1 object-contain object-bottom drop-shadow-xl"
          />
        </div>

        <h2
          id="jessie-mission-title"
          className="mt-2 text-balance font-heading text-2xl font-bold text-[#f5c542] drop-shadow-[0_2px_0_#1454b8]"
        >
          O xerife Woody e a Cowgirl Jessie tem uma missão especial para você!
        </h2>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#194a7a]">
          <p>
            Antes de embarcarmos nessa grande aventura, arraste até o fim da
            página e confirme sua presença para que possamos preparar uma festa
            incrível e deixar tudo prontinho para receber toda a nossa turma.
          </p>
          <p>
            Leva só um minutinho e ajuda a tornar esse dia ainda mais especial!
          </p>
          <p className="font-heading text-lg font-bold text-[#1677d2]">
            *Yee-haw!
          </p>
        </div>
      </div>
    </div>
  )
}
