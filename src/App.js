import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter as BRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./components/Profile";
import { Context } from "./pages/Context";
import { Navbar } from "./components/Navbar";

export const AppContext = createContext();

function App() {
  const [userName, setUserName] = useState("Jonathan");

  return (
    <div className="App">
      <AppContext.Provider value={{ userName, setUserName }}>
        <BRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home userName={userName} />} />
            <Route path="/profile" element={<Profile userName={userName} />} />
            <Route path="/context" element={<Context />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </BRouter>
      </AppContext.Provider>
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
