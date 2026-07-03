import Image from "next/image"

export function SideCharacters() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-0 flex items-end justify-between"
    >
      <Image
        src="/convite/images/woody-removebg-preview.png"
        alt=""
        width={400}
        height={650}
        className="h-[34vh] w-auto max-w-[40vw] object-contain object-bottom drop-shadow-xl sm:h-[42vh]"
      />
      <Image
        src="/convite/images/jessie-removebg-preview.png"
        alt=""
        width={400}
        height={650}
        className="h-[32vh] w-auto max-w-[40vw] object-contain object-bottom drop-shadow-xl sm:h-[40vh]"
      />
    </div>
  )
}
