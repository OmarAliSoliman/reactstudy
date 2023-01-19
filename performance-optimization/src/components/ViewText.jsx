import React from 'react'
import Text from './Text'

function ViewText({text, handelage, age}) {

  console.log('view text component');

  const apiCount = () => {
    for (let i = 0; i <= 500_000_000; i++) {}
    console.log('view text forloop')
  }
  

  apiCount();

  return (
    <div className='text_container'>
      <button onClick={handelage}>handel age </button>
      <h5>The include text is:</h5>
      <Text> {text.name} </Text>
      <Text> {text.age} </Text>
    </div>
  )
}

export default React.memo(ViewText);