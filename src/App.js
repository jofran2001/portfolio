import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Tecnologies from "./components/Tecnologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Home />
      <Tecnologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
