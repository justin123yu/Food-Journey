import { NextResponse } from "next/server";
export async function GET(){
    var data;
    const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.AIR_TABLE_API}`
        }
      };

        await fetch('https://api.airtable.com/v0/appWF1wQ4ozIpCeq3/Resturant?pageSize=20', options)
        .then(response => response.json())
        .then(response => data = response)
        .catch(err => console.error(err));
    return NextResponse.json(data);
}