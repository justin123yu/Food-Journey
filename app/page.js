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
        <h5 className="landingText mt-5 text-white">Welcome to my Food Journey</h5>
      </div>
    </main>
  )
}
