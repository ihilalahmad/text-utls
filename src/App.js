import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" />
      <div className="container mt-3">
        <Textform heading="Enter your text below" />
      </div>
    </>
  );
}

export default App;
