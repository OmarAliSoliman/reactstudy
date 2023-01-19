import { useCallback, useMemo, useState } from "react";
import ViewCounter from "./components/ViewCounter";
import ViewText from "./components/ViewText";
import "./css/style.css";
function App() {
  const [count, setCout] = useState(0);
  const [user, setUser] = useState({ name: "omar" });

  const increaseCounter = () => {
    setCout(count + 1);
  };
  const name = useMemo(() => {
    return user;
  }, [user]);

  const handelage = useCallback(() => {
    setUser((prev)=> {return {...prev, age: "30"}});
    // console.log(user.age);
  }, []);


  console.log(user)

  return (
    <div className="App">
      <ViewCounter num={count} increaseCounter={increaseCounter} />
      <ViewText text={name} handelage={handelage} age={user.age} />
    </div>
  );
}

export default App;
