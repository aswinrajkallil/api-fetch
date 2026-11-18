import React from 'react'
import { useParams } from 'react-router-dom'

function Productdetails() {
    const {productid} = useParams()

    
  return (
    <div>
      <h1>details</h1>

      <h1>{productid}</h1>
    </div>
  )
}

export default Productdetails
