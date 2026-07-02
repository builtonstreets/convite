"use client"

import { Pause, Play } from "lucide-react"
import { useRef, useState } from "react"

export function InviteVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)

  function togglePlay() {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <div className="animate-pop-in relative left-1/2 w-[min(calc(100vw-1rem),42rem)] -translate-x-1/2 overflow-hidden rounded-3xl border-4 border-accent/60 bg-card shadow-xl shadow-foreground/20">
      <div className="relative">
        <video
          ref={videoRef}
          className="aspect-video w-full object-cover"
          src="/videos/woody-jessie.mp4"
          autoPlay
          muted
          playsInline
          onEnded={() => setPlaying(false)}
          aria-label="Vídeo do Woody e da Jessie dançando"
        />
        <div className="absolute bottom-3 right-3 flex gap-2">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            {playing ? (
              <Pause className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Play className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
