import React from "react"
import "../styles/home.css"

export default function Resturant() {
  async function getAirtable(){
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.AIR_TABLE_API}`
      }
    };
    
    const response = await fetch(`${process.env.AIR_TABLE_URL}`, options);
    return response.json();
  }
  return (
    <main>
      <div>
        <p>Resturants</p>
        
      </div>
    </main>
  )
}
