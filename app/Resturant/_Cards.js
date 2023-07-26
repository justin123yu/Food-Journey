import React, { useState, useEffect } from "react"
import Image from 'next/image';
import Link from "next/link";

async function getData() {
  var records;
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIR_TABLE_API}`
    }
  };

  await fetch('https://api.airtable.com/v0/appWF1wQ4ozIpCeq3/Resturant?pageSize=20', options)
    .then(response => response.json())
    .then(data => records = data)
    .catch(err => console.error(err));
  return records;
}

export default function Resturant() {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getData()
      .then((data) => {
        setData(data.records)
        setLoading(false)
      })
  }, [])

  function handleClick(event) {
    <Link href={`/Restruant/${event}`}></Link>
  }

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((items) =>
          <div className="col" key={items.id}>
            <div className="card h-100">
              <Image className="card-img-top" src={items.fields.Photo[0].url} alt={items.fields.Name + " Photo"} quality={70} width={300} height={300} priority />
              <div className="card-body">
                <h5 className="card-title text-center">{items.fields.Name}</h5>
                <p className="card-text">{items.fields.Comments}</p>
                <div className="text-center"> <Link className="btn btn-secondary text-center" href={{
                  pathname: `/Resturant/${items.fields.Name}`,
                  query: { item: JSON.stringify(items.fields) }
                }}> Details </Link> </div>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>);
}