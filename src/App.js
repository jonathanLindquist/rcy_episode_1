import "./App.css";
import { Person } from "./components/Person";

// useState
// useContext
// useEffect

function App() {
  return (
    <Person
      name="Jonathan"
      email="bq6rV@example.com"
      age={34}
      isMarried={false}
      friends={["Alaina", "Ben", "Cody"]}
    />
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
