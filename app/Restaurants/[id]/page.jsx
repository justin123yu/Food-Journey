"use client"
import React from "react";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';

import "../../styles/home.css"

export default function DetailedResturants() {
    
    const searchParams = useSearchParams();
    const object = searchParams.get("item");
    const restaurant = JSON.parse(object);

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <Image className="card-img-top" src={restaurant.Photo[0].url} alt={restaurant.Name+" Photo"}  quality={70} width={300} height={300} priority /> 
                </div>
                <div className="col-md-8">
                    <div id="detailedCard" className="card-body text-left">
                        <h5 className="card-title">{restaurant.Name}</h5>
                        <p className="card-text">{restaurant.Location}</p>
                        <p className="card-text">{restaurant.Comments}</p>
                        <p className="card-text"><small className="text-body-secondary">Rating: {restaurant.Rating}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}