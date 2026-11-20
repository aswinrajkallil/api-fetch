import React from 'react'
import Child from './Child'

const Parent = () => {

const getChildData = (data) =>{
    console.log(data);
    
}

  return (
    <div>
      <h1>parent</h1>

      <Child name={"aswin"} age={30} sendData={getChildData}/>
    </div>
  )
}

export default Parent
