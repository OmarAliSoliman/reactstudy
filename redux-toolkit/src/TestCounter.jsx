import React from 'react'
import { useSelector } from 'react-redux';

function TestCounter() {
  const counter = useSelector((stete)=>{
    return stete.counter
  })
  return (
    <>
      <div>
        <h5>test counter = {counter}</h5>
      </div>
    </>
  )
}

export default TestCounter