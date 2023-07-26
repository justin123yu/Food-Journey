"use client"
import React from "react";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';

export default function DetailedResturants() {
    const searchParams = useSearchParams();
    const object = searchParams.get("item");
    const resturant = JSON.parse(object);


    return (<main>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <Image className="card-img-top" src={resturant.Photo[0].url} alt={resturant.Name+" Photo"}  quality={70} width={300} height={300} priority /> 
                </div>
                <div className="col-md-8">
                    <div className="card-body text-left">
                        <h5 className="card-title">{resturant.Name}</h5>
                        <p className="card-text">{resturant.Location}</p>
                        <p className="card-text">{resturant.Comments}</p>
                        <p className="card-text"><small className="text-body-secondary">Rating: {resturant.Rating}</small></p>
                    </div>
                </div>
            </div>
        </div>
    </main>)
}