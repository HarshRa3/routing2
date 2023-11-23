import React from "react";
import NavBar from "./component.js/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Contact from "./pages/Contact";
import About from "./pages/About";
import DisplayMsg from "./component.js/DisplayMsg";
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Messages />}>
          <Route path=":id" element={<DisplayMsg />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
