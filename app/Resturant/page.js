"use client"
import React from "react"
import "../styles/home.css"
import useSWR from 'swr'

export default function Resturant() {
  async function getData(){
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('/api/airtable', fetcher)
    console.log(data);
  }
  getData();  
  return (
    <main>
      <div>
        <p>Resturants</p>
        
      </div>
    </main>
  )
}
