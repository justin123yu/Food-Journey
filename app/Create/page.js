"use client"
import React, { useState } from "react"
export default function Create() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState();
  const [rating, setRating] = useState(0);
  const [comment, setComments] = useState("");
  const data = {
    "fields": {
      "Name": `${name}`,
      "Location": `${location}`,
      "Photo": [
        {
          "url": `${photo}`
        }
      ],
      "Rating": `${rating}`,
      "Comments": `${comment}`
    }
  }

  function uploadToImgur(e){
    e.preventDefault();
    const myHeader = new Headers();
    myHeader.append("Authorization", "Bearer 8cd6efc7cd600ee40c54a69570a83264971adc9c")
    const formdata = new FormData()
    formdata.append("image", photo)
    const requestOptions = {
      method: "POST",
      headers: myHeader,
      body: formdata
    }

    fetch("https://api.imgur.com/3/image", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }
  async function submitResturant() {
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIR_TABLE_API}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    // await fetch("https://api.airtable.com/v0/appWF1wQ4ozIpCeq3/Resturant", options);
    console.log(data);
  }

  return (
    <main>  
      <div>
        <p>Post Restaurant</p>
        <form onSubmit={uploadToImgur}>
        <div className="file-uploader">
            <input type="file" onChange={e => setPhoto(e.target.files[0])}></input>
        </div>
        <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  )
}
