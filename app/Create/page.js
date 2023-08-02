"use client"
import Script from "next/script"
import React from "react"
export default function Create() {



  return (
    <main>
      <Script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></Script>
      <iframe class="airtable-embed airtable-dynamic-height" 
      src="https://airtable.com/embed/appWF1wQ4ozIpCeq3/shrftNo8gtCahNnhh?backgroundColor=green" 
       onmousewheel="" 
       width="100%" height="1115"></iframe>
    </main>
  )
}
