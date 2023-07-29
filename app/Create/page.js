"use client"
import React, { useState } from "react"
export default function Create() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState();
  const [rating, setRating] = useState(0);
  const [comment, setComments] = useState("");

  async function submitResturant(url) {
    const data = {
      "fields": {
        "Name": `${name}`,
        "Location": `${location}`,
        "Photo": [
          {
            "url": `${url}`
          }
        ],
        "Rating": `${rating}`,
        "Comments": `${comment}`
      }
    }
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIR_TABLE_API}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    await fetch("https://api.airtable.com/v0/appWF1wQ4ozIpCeq3/Resturant", options).then(() => {
      console.log("Submited to Airtable");
    }).catch((err) => console.error(err));

  }

  async function uploadToImgur(e) {
    e.preventDefault();
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${process.env.NEXT_PUBLIC_IMGUR_KEY}`)
    const formdata = new FormData()
    formdata.append("image", photo)
    const requestOptions = {
      method: "POST",
      headers: myHeader,
      body: formdata
    }

    await fetch("https://api.imgur.com/3/image", requestOptions)
      .then(response => response.json())
      .then(result => setPhoto(result.data.link))
      .catch(error => console.log('error', error));

    await submitResturant(photo)
  }

  return (
    <main>
      <div>
        <p>Post Restaurant</p>
        <form onSubmit={uploadToImgur}>
          <div className="row mb-3">
            <label className="form-label">Name of Restaurant</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" id="Name"></input>
          </div>
          <div className="row mb-3">
            <label className="form-label">Location</label>
            <input type="text" value={location} onChange={e => setLocation(e.target.value)} className="form-control" id="Location"></input>
          </div>
          <div className="row mb-3">
            <label className="form-label">Rating</label>
            <input type="number" value={rating} onChange={e => setRating(e.target.value)} className="form-control" id="Rating"></input>
          </div>
          <div className="row mb-3">
            <label className="form-label">Comments</label>
            <input type="text" className="form-control" value={comment} onChange={e => setComments(e.target.value)} id="Comments"></input>
          </div>
          <div className="row mb-3">
            <input type="file" accept="image/*" onChange={e => setPhoto(e.target.files[0])}></input>
          </div>
          <button className="btn btn-primary text-center" type="submit">Submit</button>
        </form>
      </div>
    </main>
  )
}
