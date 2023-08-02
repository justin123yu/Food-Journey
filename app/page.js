import React from "react"
import Image from "next/image"
import background from "../public/Background.jpg"

export default function Home() {
  return (
    <main>
      <div>
        {/* <Image
        className="landingImage"
        src={background}
        quality={100}
        fill
        sizes="100vw"
        objectFit="cover"
        alt="Background picture">
        </Image> */}
        <p className="landingText">Welcome to my Food Journey</p>
      </div>
    </main>
  )
}
