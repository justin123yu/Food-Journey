"use client"
import React, { useState } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from 'next/navigation';

import "../../styles/home.css"

export default function DetailedResturants() {

    const searchParams = useSearchParams();
    const object = searchParams.get("item");
    const restaurant = JSON.parse(object);
    const router = useRouter();
    const [key, setKey] = useState("");
    const [error, setError] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    async function deleteRecord(event) {
        event.preventDefault();
        if (key !== process.env.NEXT_PUBLIC_SECRET) {
            setError(true);
        } else {
            setError(false);
            const options = {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIR_TABLE_API}`
                }
            };

            await fetch(`https://api.airtable.com/v0/appWF1wQ4ozIpCeq3/Resturant/${restaurant.id}`, options)
                .then(response => response.json())
                .then(() => {
                    alert("Restaurant is deleted");
                    router.push("/Restaurants")
                })
                .catch(err => console.error(err));
        }

    }

    function ErrorMessage({ displayError }) {
        if (displayError) {
            return (<div> <p id="Error" className="text-danger border border-danger"> Wrong Passcode</p></div>)
        }
    }

    function Map({ display }) {
        if (display) {
            return <div className="row">
                <iframe
                    src={restaurant.fields.Map}
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        }
    }

    return (
        <div >
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-3">
                        <Image className="card-img-top" src={restaurant.fields.Photo[0].url} alt={restaurant.fields.Name + " Photo"} quality={70} width={300} height={300} priority />
                    </div>
                    <div className="col-md-9 px-3 ">
                        <div id="detailedCard" className="card-body text-left">
                            <h5 className="card-title">{restaurant.fields.Name}</h5>
                            <p className="card-text">{restaurant.fields.Location}</p>
                            <p className="card-text">{restaurant.fields.Comments}</p>
                            <p className="card-text"><small className="text-body-secondary">Rating: {restaurant.fields.Rating}</small></p>
                            <div >
                                <ErrorMessage displayError={error}></ErrorMessage>
                                <label >Access Code</label>
                                <br></br>
                                <input type="text" value={key} onChange={e => setKey(e.target.value)} id="code" ></input>
                                <br></br>
                                <button className="btn btn-secondary mt-3" onClick={deleteRecord}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="col-3"><button id="Map" className="btn btn-secondary pt-3" onClick={handleClick}>Map Button</button></div>
                <Map display={toggle}></Map>
            </div>

        </div>
    )
}