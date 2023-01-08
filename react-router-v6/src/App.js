import { Accordion } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import BisicNavbar from "./components/BisicNavbar";

function App() {
  return (
    <div className="App">
      <BisicNavbar />
      <div className="main_content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
