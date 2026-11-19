import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function Productdetails() {
  const {id} = useParams()
    const [data, setdata] = useState({})

  useEffect(()=>{
    const fetchdata = async () =>{
      try{
        const response = await axios.get( `https://jsonplaceholder.typicode.com/posts/${id}`)
        setdata(response.data)

      }catch(e){
        console.log(e);
        
      }
    }
     fetchdata()
  }, [id])
    
  return (
    <div>
      <h1>details</h1>

      <h1>{id}</h1>
      <h2>{data.title}</h2>
      <h4>{data.body}</h4>
    </div>
  )
}

export default Productdetails
