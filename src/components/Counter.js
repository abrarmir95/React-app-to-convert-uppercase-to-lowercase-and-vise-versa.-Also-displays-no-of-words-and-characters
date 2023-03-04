import React, { useState } from 'react'

export default function Couter() {

  const [count, setCount] = useState(0)

  function decrement() {
    setCount = count - 1
  }

  function incerement() {
  setCount = count+1

}
return (
  <>
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={incerement}>+</button>
    </div>
  </>
)
}
