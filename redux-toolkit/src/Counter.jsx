import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  const toggleCounterAction = (action, payload) => {
    dispatch({ type: action, payload: payload});
  };

  const checkValue=(count)=>{
    if (count <=0){
      count = 0; 
    }
    return count;
  }

  const toggleShow = () => {
    dispatch({ type: 'toggleShow' });
  };

  return (
    <>
      <div className="counter_content">
        <div className="counter_wrapper">
          {globalState.show ? (
            <>
              <h5 className="counter">Counter : {checkValue(globalState.counter)}</h5>

              <div className="counter_option">
                <button
                  className="increase"
                  onClick={()=>toggleCounterAction("increase", 5)}
                >
                  Increase +
                </button>
                <button
                  className="decrease"
                  onClick={()=>toggleCounterAction("decrease", 3)}
                >
                  Decrease -
                </button>
              </div>
            </>
          ) : null}

          <div className="counter_show">
            <button
              className="hide_show"
              onClick={toggleShow}
            >
              Hide/Show Counter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
