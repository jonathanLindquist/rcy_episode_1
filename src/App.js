import "./App.css";
import { useEffect, useState } from "react";
import Text from "./components/Text";
import Axios from "axios";

function App() {
  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  const [catFact, setCatFact] = useState("");
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  useEffect(() => {
    fetchCatFact();
  }, []);

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  const fetchAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data);
      setPredictedAge(res.data);
    });
  };

  return (
    <div className="App">
      <div>
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{catFact}</p>
      </div>
      <div>
        <input
          placeholder="Enter your name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <button onClick={fetchAge}>Predict Age</button>

        <h1>Predicted Name: {predictedAge?.name}</h1>
        <h1>Predicted Age: {predictedAge?.age}</h1>
        <h1>Predicted Count: {predictedAge?.count}</h1>
      </div>
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
