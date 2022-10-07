import React, { Component } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Navbar from "../component/Navbar";
// import NotFound from "../pages/NotFound";
import Favorite from "../pages/Favorite";
export class index extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id_movie" element={<Detail />} />
          <Route path="/favorite" element={<Favorite />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default index;
