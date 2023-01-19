import React from 'react'

function Text({children}) {

  console.log('text component');

  return (
    <div>{children}</div>
  )
}

export default Text