import { legacy_createStore as createStore } from "redux";

const initState = { counter: 0, show: false };
const countReducer = (state = initState, action) => {
  if (action.type === "increase") {
    
    return { ...state, counter: state.counter + action.payload };
  }
  if (action.type === "decrease") {
    // var newS = state.counter - action.payload;
    // if(newS <=0){
    //   newS = 0
    // }
    return { ...state, counter: state.counter - action.payload };
  }
  if (action.type === "toggleShow") {
    return { ...state, show: !state.show };
  }
  return state;
};

const store = createStore(countReducer);

export default store;
