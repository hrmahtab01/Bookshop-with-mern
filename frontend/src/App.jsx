import React from "react";
import Home from "./Page/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Courses from "./Components/Courses";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/courses" element={<Courses />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
