"use client"
import React from "react";

import {useSearchParams} from 'next/navigation';

export default function DetailedResturants(){
    const searchParams = useSearchParams();
    const object = searchParams.get("item");
    const resturant = JSON.parse(object);


    return(<div> DETAILED VIEW for {resturant.Name} </div>)
}