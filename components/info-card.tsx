import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface InfoCardProps {
  icon: LucideIcon
  title: string
  children: ReactNode
}

export function InfoCard({ icon: Icon, title, children }: InfoCardProps) {
  return (
    <div className="animate-pop-in rounded-3xl border-2 border-primary/40 bg-card/95 px-6 py-8 text-center shadow-lg shadow-foreground/10 backdrop-blur-sm">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md ring-4 ring-card">
        <Icon className="h-7 w-7" strokeWidth={2.5} aria-hidden="true" />
      </div>
      <h3 className="font-heading text-2xl font-semibold text-secondary">{title}</h3>
      <div className="mt-2 text-base leading-relaxed text-card-foreground/80">{children}</div>
    </div>
  )
}
