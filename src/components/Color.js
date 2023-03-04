import React, { useState } from 'react'

export default function Color() {

  const [rang, setRang] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const changingColor = () => {
    setRang({
      color: 'blue'
    })
  }
  return (
    <>
      <div>
        <h1 style={rang}>This is my favourite color </h1>

        <button onClick={changingColor}>Click here to change color</button>
      </div>
    </>
  )
}
