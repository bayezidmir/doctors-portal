import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Shared/Navbar";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
