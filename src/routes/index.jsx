// import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Navbar from "../component/Navbar";
// import NotFound from "../pages/NotFound";
import Favorite from "../pages/Favorite";
import { ThemeContext } from "utils/Context";
import { useEffect, useMemo, useState } from "react";

function App() {
  const [isLight, setIslight] = useState(true);
  const theme = useMemo(() => ({ isLight, setIslight }), [isLight]);
  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isLight]);
  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <body className=" bg-light-mode dark:bg-secondary-600 transition-all overflow-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id_movie" element={<Detail />} />
            <Route path="/favorite" element={<Favorite />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </body>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
