import React, { useState, useEffect } from "react"
import Image from 'next/image';

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
        console.log(data.records[0].fields.Photo[0].thumbnails.large.url);
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((items) =>
        <div className="col" key={items.id}>
          <div className="card">
            {/* <Image className="card-img-top" src={items.fields.url} alt="Card image cap" width={500} height={500}/> */}
            <div className="card-body">
              <h5 className="card-title text-center">{items.fields.Name}</h5>
              <p className="card-text">{items.fields.Comments}</p>
            </div>
          </div>
        </div>)
      }
      </div>
    </div>);
}