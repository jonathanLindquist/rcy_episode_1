import "./App.css";
import { useToggle } from "./hooks/useToggle";
import { Cat } from "./components/Cat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// useState
// useContext
// useEffect

function App() {
  const [isVisible, toggle] = useToggle();
  const [isVisible2, toggle2] = useToggle();

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && <h1>Hidden Text</h1>}
        <button onClick={toggle2}>{isVisible2 ? "Hide" : "Show"}</button>
        {isVisible2 && <h1>Hidden Text 2</h1>}
        <Cat />
      </div>
    </QueryClientProvider>
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
