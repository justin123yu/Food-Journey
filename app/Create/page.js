"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation";
export default function Create() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState();
  const [rating, setRating] = useState(0);
  const [key, setKey] = useState("");
  const [comment, setComments] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  async function submitResturant(e) {
    e.preventDefault();
    if (key !== process.env.NEXT_PUBLIC_SECRET) {
      setError(true);
    } else {
      setError(false);
      const url = await uploadToImgur();
      const data = {
        "fields": {
          "Name": name,
          "Location": location,
          "Photo": [
            {
              "url": url
            }
          ],
          "Rating": parseInt(rating),
          "Comments": comment
        }
      }
      const options = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIR_TABLE_API}`,
          "Accept": "application/json",
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };

      await fetch("https://api.airtable.com/v0/appWF1wQ4ozIpCeq3/Resturant", options)
        .then(response => response.json())
        .then(() => {
          alert("Data Sent to the server");
          router.push("/Restaurants")
          
        })
        .catch(err => {
          console.error(err)
        })
    }

  }


  async function uploadToImgur() {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${process.env.NEXT_PUBLIC_IMGUR_KEY}`)
    const formdata = new FormData()
    formdata.append("image", photo)
    const requestOptions = {
      method: "POST",
      headers: myHeader,
      body: formdata
    }
    var url = "";
    await fetch("https://api.imgur.com/3/image", requestOptions)
      .then(response => response.json())
      .then(result => url = result.data.link)
      .catch(error => console.error('error', error));
    return url;
  }

  function ErrorMessage({ displayError }) {
    if (displayError) {
      return (<div> <h2> Wrong Passcode</h2></div>)
    }
  }

  return (
    <main>
      <div>
        <p>Post Restaurant</p>
        {/* <form onSubmit={submitResturant}>
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
            <input type="number" value={rating} onChange={e => setRating(e.target.value)} className="form-control" id="Rating" min="0" max="5" ></input>
          </div>
          <div className="row mb-3">
            <label className="form-label">Comments</label>
            <input type="text" className="form-control" value={comment} onChange={e => setComments(e.target.value)} id="Comments"></input>
          </div>
          <div className="row mb-3">
            <input type="file" accept="image/*" onChange={e => setPhoto(e.target.files[0])}></input>
          </div>
          <div className="row mb-3">
            <ErrorMessage displayError={error}></ErrorMessage>
            <label className="form-label">Access Code</label>
            <input type="text" value={key} onChange={e => setKey(e.target.value)} className="form-control" id="code" ></input>
          </div>
          <button className="btn btn-primary text-center" type="submit">Submit</button>
        </form> */}
        <iframe src="https://airtable.com/appWF1wQ4ozIpCeq3/shrftNo8gtCahNnhh" height={300}>

        </iframe>
      </div>
    </main>
  )
}
