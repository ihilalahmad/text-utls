import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container mt-3">
        <Textform heading="Enter your text below" mode={mode} />
      </div>
    </>
  );
}

export default App;
