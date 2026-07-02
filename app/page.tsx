import { CloudBackground } from "@/components/cloud-background"
import { InviteFlow } from "@/components/invite-flow"

export default function Page() {
  return (
    <main className="relative isolate min-h-dvh w-full overflow-x-hidden">
      <CloudBackground />
      <div className="relative z-10">
        <InviteFlow />
      </div>
    </main>
  )
}
