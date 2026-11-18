import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function ApiFetching() {
  const [posts , setposts] = useState([])
   const navigate =  useNavigate()

        useEffect(()=>{
            fetchingdata()
            }, [])

  const fetchingdata = async ()=>{
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
     
        setposts(response.data)
        
    } catch (error) {
        
    }
  }


  const gotodetails = (id)=>{
     navigate(`/details/${id}`)
  }

  return (
    <div>

        {posts.map((items)=>(
            <div key={items.id}> 
                <h1>{items.body}</h1>
                   <h2>{items.title}</h2>
                   <button onClick={()=>gotodetails(items.id)}>view details</button>
            </div>
        ))}
      
    </div>
  )
}

export default ApiFetching
