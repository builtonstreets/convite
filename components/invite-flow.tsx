"use client"

import { CalendarDays, Clock, Heart, MapPin } from "lucide-react"
import { useRef, useState } from "react"
import { ConfirmPresence } from "@/components/confirm-presence"
import { EnvelopeCover } from "@/components/envelope-cover"
import { GiftOptions } from "@/components/gift-options"
import { InfoCard } from "@/components/info-card"
import { InviteVideo } from "@/components/invite-video"
import { JessieMissionModal } from "@/components/jessie-mission-modal"
import { MusicButton } from "@/components/music-button"
import { SideCharacters } from "@/components/side-characters"

const MUSIC_SRC = "/convite/music/toy-story-theme.mp3"

export function InviteFlow() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [opened, setOpened] = useState(false)
  const [showMission, setShowMission] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)

  function playMusic() {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.55
    audio.play().then(() => setMusicPlaying(true)).catch(() => {
      setMusicPlaying(false)
    })
  }

  function toggleMusic() {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      playMusic()
    } else {
      audio.pause()
      setMusicPlaying(false)
    }
  }

  function openInvite() {
    playMusic()
    setOpened(true)
    setShowMission(true)
  }

  return (
    <>
      <audio ref={audioRef} src={MUSIC_SRC} loop preload="auto" />

      {!opened ? (
        <>
          <SideCharacters />
          <EnvelopeCover onOpen={openInvite} />
        </>
      ) : (
        <>
          <SideCharacters />
          <MusicButton playing={musicPlaying} onToggle={toggleMusic} />
          {showMission && (
            <JessieMissionModal onClose={() => setShowMission(false)} />
          )}

          <div className="relative z-10 mx-auto flex max-w-md flex-col gap-7 px-5 py-12">
            <InviteVideo />

            <InfoCard icon={CalendarDays} title="Data">
              29/08/2026
            </InfoCard>

            <InfoCard icon={Clock} title="Horário">
              14h
            </InfoCard>

            <InfoCard icon={MapPin} title="Local">
              <p>Chácara Beer in Ball</p>
              <div className="mt-5 overflow-hidden rounded-2xl border-2 border-primary/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.873813042968!2d-48.20135252381761!3d-15.704847320758656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bb7aac1f72369%3A0xaba10ecc471b0040!2sCh%C3%A1cara%20Beer%20in%20Ball!5e0!3m2!1spt-BR!2sbr!4v1782867312880!5m2!1spt-BR!2sbr"
                  title="Mapa da Chácara Beer in Ball"
                  width="600"
                  height="300"
                  className="block h-72 w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </InfoCard>

            <GiftOptions />

            <ConfirmPresence />

            <footer className="mt-2 flex flex-col items-center gap-2 text-center">
              <Heart
                className="h-8 w-8 animate-wiggle fill-primary text-primary"
                aria-hidden="true"
              />
              <p className="font-heading text-sm text-card-foreground/70">
                Feito com carinho para você
              </p>
            </footer>
          </div>
        </>
      )}
    </>
  )
}
