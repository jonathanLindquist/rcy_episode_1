import "./App.css";
import { BrowserRouter as BRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Context } from "./pages/Context";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/context" element={<Context />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </BRouter>
    </div>
  );
}

export default App;

// Lifecycle stages
//
// mounting
// updating
// unmounting

// Old lifecycle ways
//
// compnentDidMount, etc... (methods for class components)
