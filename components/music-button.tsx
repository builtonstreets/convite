"use client"

import { Volume2, VolumeX } from "lucide-react"

interface MusicButtonProps {
  playing: boolean
  onToggle: () => void
}

export function MusicButton({ playing, onToggle }: MusicButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={playing}
      aria-label={playing ? "Desativar música" : "Ativar música"}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-foreground/20 ring-4 ring-card transition-transform hover:scale-110 active:scale-95"
    >
      {playing ? (
        <Volume2 className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
      ) : (
        <VolumeX className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
      )}
    </button>
  )
}
