import React from "react";
import Home from "./Page/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Courses from "./Components/Courses";
import Layout from "./Components/Layout";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Login from "./Page/Login";
import Signup from "./Page/Signup";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
