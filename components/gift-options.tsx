"use client"

import { Gift, Shirt, ShoppingBag } from "lucide-react"
import { useState } from "react"

export function GiftOptions() {
  const [open, setOpen] = useState(false)

  return (
    <div className="animate-pop-in rounded-3xl border-2 border-secondary/40 bg-card/95 px-6 py-8 text-center shadow-lg shadow-foreground/10 backdrop-blur-sm">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-md ring-4 ring-card animate-wiggle">
        <Gift className="h-7 w-7" strokeWidth={2.5} aria-hidden="true" />
      </div>

      <h3 className="font-heading text-3xl font-bold text-secondary">
        Sugestão de Presente
      </h3>
      <p className="mt-2 text-base leading-relaxed text-card-foreground/80">
        Nesta aventura, o presente mais especial é ter você comemorando conosco!
        Para presentear nossos pequenos aventureiros, preparamos algumas sugestões para facilitar sua escolha. ⭐
      </p>

      {open ? (
        <ul className="mt-6 space-y-3 text-left">
          <li className="flex gap-3 rounded-2xl border-2 border-secondary/30 bg-background/30 p-4 text-card-foreground/85">
            <Shirt className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
            <span>Roupas tamanho 3 e 4 anos</span>
          </li>
          <li className="flex gap-3 rounded-2xl border-2 border-secondary/30 bg-background/30 p-4 text-card-foreground/85">
            <ShoppingBag className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
            <span>Brinquedos interativos para a idade</span>
          </li>
          <li className="flex gap-3 rounded-2xl border-2 border-secondary/30 bg-background/30 p-4 text-card-foreground/85">
            <Gift className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
            <span>Sapatos tamanho 22/23</span>
          </li>
        </ul>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-secondary px-6 py-4 font-heading text-lg font-semibold text-secondary-foreground shadow-md transition-transform hover:scale-[1.02] active:scale-95"
        >
          <Gift className="h-5 w-5" aria-hidden="true" />
          Ver sugestões de presente
        </button>
      )}
    </div>
  )
}
