import Script from 'next/script';
import Navbar from './_component/navbar'
import "./styles/home.css"
import {Roboto} from "next/font/google"

export const metadata = {
    title:"Food Journey App",
    description: "Show cases resturants that I enjoy and been to."
}
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossOrigin="anonymous">
      </link>
      </head>
      <body className={roboto.className}>
      <Navbar></Navbar>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossOrigin="anonymous"></Script>
        </body>
    </html>
  )
}
