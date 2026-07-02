export function CloudBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: "url('/images/cloud-wallpaper.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "repeat-y",
        backgroundColor: "oklch(0.78 0.11 240)",
      }}
    >
      <div className="absolute inset-0 bg-background/10" />
    </div>
  )
}
