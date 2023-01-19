import React from "react";

function ViewCounter({num, increaseCounter}) {

  console.log('view counter component');


  return (
    <div>
      <div className="counter_content">
        <div className="counter_header">
          <h1>{num}</h1>
        </div>
        <div className="counter_btn">
          <button onClick={increaseCounter}> increase </button>
        </div>
      </div>
    </div>
  );
}

export default ViewCounter;
