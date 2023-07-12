import React from "react"
import "./styles/home.css"

// Example POST method implementation:
async function postData() {
  // Default options are marked with *
  fetch("https://api.airtable.com/v0/appWF1wQ4ozIpCeq3/Resturant?api_key=patXsSrEwzJ0ACQuF.725df7390446b59d0f0ef1276b749531d8f3c2fc30b1d9fb11f2f5a0e54fe8b7")
}


export default function Home() {
  console.log(postData());
  return (
    <main>
      <div>
        <p>Welcome to my Food Journey</p>
      </div>
    </main>
  )
}
