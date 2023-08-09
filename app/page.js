import React from "react"
import Image from "next/image"
import background from "../public/Background.jpg"

export default function Home() {
  return (
    <main>
      <div>
        <Image
        className="landingImage"
        src={background}
        fill
        sizes="100vw"
        alt="Background picture">
        </Image>
        <h3 className="landingText mt-4 text-dark">Welcome to my Food Journey</h3>
      </div>
    </main>
  )
}
