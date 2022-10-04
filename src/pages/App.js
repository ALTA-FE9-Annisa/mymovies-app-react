import Navbar from "../component/Navbar";
import Home from "./Home";

import Detail from "./Detail";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Detail />

      {/* <Router>
        <Navbar />

        <Routes>
         
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
