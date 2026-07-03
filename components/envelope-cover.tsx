"use client"

import { Mail, Sparkles, Star } from "lucide-react"
import Image from "next/image"

interface EnvelopeCoverProps {
  onOpen: () => void
}

export function EnvelopeCover({ onOpen }: EnvelopeCoverProps) {
  return (
    <div className="relative z-10 flex min-h-dvh w-full items-center justify-center px-5 py-12">
      <div className="animate-pop-in w-full max-w-md text-center">
        {/* Logo Toy Story */}
        <Image
          src="/convite/images/toy-story-logo.png"
          alt="Logo Toy Story"
          width={500}
          height={350}
          priority
          className="mx-auto mb-4 h-28 w-auto animate-float-slow drop-shadow-lg"
        />

        <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-[#f5c542] drop-shadow-[0_2px_0_#1454b8]">
          Ao infinito e além
        </p>

        {/* Envelope */}
        <div className="relative mx-auto mt-6 w-full max-w-xs">
          <div className="relative overflow-hidden rounded-3xl border-4 border-[#1677d2] bg-white shadow-2xl shadow-[#1454b8]/25">
            {/* Aba do envelope */}
            <div
              className="relative flex h-28 items-center justify-center bg-white"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              }}
            >
              <Star
                className="h-7 w-7 animate-twinkle fill-[#f5c542] text-[#1454b8]"
                aria-hidden="true"
              />
            </div>

            {/* Selo */}
            <div className="absolute left-1/2 top-20 z-10 -translate-x-1/2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1677d2] text-white shadow-lg ring-4 ring-white animate-wiggle">
                <Mail className="h-7 w-7" strokeWidth={2.5} aria-hidden="true" />
              </div>
            </div>

            {/* Corpo */}
            <div className="px-6 pb-8 pt-12">
              <p className="font-heading text-lg font-semibold text-[#194a7a]">
                Você acaba de receber um convite muito especial para embarcar em uma grande aventura. Yee-haw!
              </p>
            <h1 className="mt-2 text-balance font-heading text-4xl font-bold text-[#f5c542] drop-shadow-[0_2px_0_#1454b8]">
               Maria Cecília 
              <br />
              <span className="text-2xl">&</span>
              <br />
              Bento Luiz
            </h1>
              <p className="mt-2 text-base leading-relaxed text-[#194a7a]/80">
                Prepare-se para um dia cheio de diversão, brincadeiras e momentos inesquecíveis.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#f5c542] px-8 py-4 font-heading text-lg font-bold text-[#194a7a] shadow-lg shadow-[#1454b8]/20 ring-2 ring-[#1677d2] transition-transform hover:scale-105 active:scale-95"
        >
          <Sparkles className="h-5 w-5" aria-hidden="true" />
          Abrir Convite
        </button>
      </div>
    </div>
  )
}
