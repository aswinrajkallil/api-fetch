import React from 'react'

const Child = ({name, age, sendData}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={()=> sendData("hello world")}>Get data</button>
    </div>
  )
}

export default Child
