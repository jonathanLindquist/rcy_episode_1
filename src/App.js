import "./App.css";
import { useState, createContext, useEffect } from "react";
import { BrowserRouter as BRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./components/Profile";
import { Context } from "./pages/Context";
import { Navbar } from "./components/Navbar";
import Axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
  const [userName, setUserName] = useState("Jonathan");
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    changeCatFact();
  }, []);

  const changeCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  const client = new QueryClient({
    defaultOptions: {
      // these are the two default topics, options inside
      queries: {
        refetchOnWindowFocus: true, // default, can set to false to not auto-fetch when switching tabs
      },
      mutations: {
        retry: false, // unknown if this is default
      },
    },
  });

  return (
    <div className="App">
      <AppContext.Provider value={{ userName, setUserName }}>
        <QueryClientProvider client={client}>
          <BRouter>
            <Navbar />
            <div>{catFact}</div>
            <button onClick={changeCatFact}>Change Cat Fact</button>
            <Routes>
              <Route path="/" element={<Home userName={userName} />} />
              <Route
                path="/profile"
                element={<Profile userName={userName} />}
              />
              <Route path="/context" element={<Context />} />
              <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
            </Routes>
          </BRouter>
        </QueryClientProvider>
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
