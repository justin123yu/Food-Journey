import React, {useState, useEffect}from "react"

async function getData(){
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
          console.log(data);
        })
    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
    
    return (
        <div className="row">
        
        </div>
    )
  }