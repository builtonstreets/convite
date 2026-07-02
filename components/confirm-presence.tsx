"use client"

import { Heart, PartyPopper, Sparkles } from "lucide-react"
import { push, ref, serverTimestamp } from "firebase/database"
import { useState } from "react"
import { database } from "@/lib/firebase"

const GUEST_OPTIONS = ["1", "2", "3", "4", "5"]

export function ConfirmPresence() {
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)
  const [guestNames, setGuestNames] = useState([""])
  const [guests, setGuests] = useState("1")
  const [sending, setSending] = useState(false)
  const [error, setError] = useState("")

  const firstName = guestNames[0]?.trim() ?? ""

  function updateGuestCount(value: string) {
    const count = Number(value)

    setGuests(value)
    setGuestNames((current) =>
      Array.from({ length: count }, (_, index) => current[index] ?? ""),
    )
  }

  function updateGuestName(index: number, value: string) {
    setGuestNames((current) =>
      current.map((guestName, currentIndex) =>
        currentIndex === index ? value : guestName,
      ),
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const names = guestNames.map((guestName) => guestName.trim())
    if (names.some((guestName) => !guestName)) {
      setError("Preencha o nome de todas as pessoas.")
      return
    }

    setSending(true)
    setError("")

    try {
      await push(ref(database, "confirmations"), {
        name: names[0],
        guestNames: names,
        guests,
        createdAt: serverTimestamp(),
      })
      setDone(true)
    } catch {
      setError("Não foi possível confirmar agora. Tente novamente em instantes.")
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="animate-pop-in rounded-3xl border-2 border-accent/40 bg-card/95 px-6 py-8 text-center shadow-lg shadow-foreground/10 backdrop-blur-sm">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md ring-4 ring-card animate-wiggle">
        <Heart className="h-7 w-7" strokeWidth={2.5} aria-hidden="true" />
      </div>

      {done ? (
        <div>
          <h3 className="font-heading text-2xl font-bold text-secondary">
            Presença confirmada!
          </h3>
          <p className="mt-3 flex items-center justify-center gap-2 text-base leading-relaxed text-card-foreground/80">
            <PartyPopper className="h-5 w-5 text-primary" aria-hidden="true" />
            {`Obrigado, ${firstName}! Ao infinito e além, mal podemos esperar por você!`}
          </p>
        </div>
      ) : (
        <>
          <h3 className="font-heading text-3xl font-bold text-secondary">
            Confirmar Presença
          </h3>
          <p className="mt-2 text-base leading-relaxed text-card-foreground/80">
            Sua confirmação é muito especial para nós.
          </p>

          {open ? (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
              <div>
                <label
                  htmlFor="guests"
                  className="mb-1.5 block font-heading text-sm font-semibold text-secondary"
                >
                  Quantas pessoas?
                </label>
                <select
                  id="guests"
                  value={guests}
                  onChange={(e) => updateGuestCount(e.target.value)}
                  className="w-full rounded-2xl border-2 border-primary/40 bg-background/40 px-4 py-3 text-card-foreground outline-none transition-colors focus:border-primary"
                >
                  {GUEST_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {guestNames.map((guestName, index) => (
                <div key={index}>
                  <label
                    htmlFor={`guest-name-${index}`}
                    className="mb-1.5 block font-heading text-sm font-semibold text-secondary"
                  >
                    {index === 0 ? "Seu nome" : `Nome da ${index + 1}ª pessoa`}
                  </label>
                  <input
                    id={`guest-name-${index}`}
                    type="text"
                    value={guestName}
                    onChange={(e) => updateGuestName(index, e.target.value)}
                    placeholder={
                      index === 0 ? "Digite seu nome" : `Digite o nome da ${index + 1}ª pessoa`
                    }
                    required
                    className="w-full rounded-2xl border-2 border-primary/40 bg-background/40 px-4 py-3 text-card-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
              ))}

              <button
                type="submit"
                disabled={sending}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-heading text-lg font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Sparkles className="h-5 w-5" aria-hidden="true" />
                {sending ? "Enviando..." : "Enviar confirmação"}
              </button>
              {error && (
                <p className="text-center text-sm font-semibold text-destructive">
                  {error}
                </p>
              )}
            </form>
          ) : (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-heading text-lg font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.02] active:scale-95"
            >
              <Sparkles className="h-5 w-5" aria-hidden="true" />
              Confirmar Minha Presença
            </button>
          )}
        </>
      )}
    </div>
  )
}
