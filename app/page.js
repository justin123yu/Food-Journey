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
        <h2 className="landingText mt-4 text-dark">Welcome to my Food Journey</h2>
        <p className="landingText mt-4 text-dark"> This website is created to showcase Restaurants that I liked</p>
        <p className="landingText text-dark">Click on Restaurants to see more !</p>
      </div>
    </main>
  )
}
