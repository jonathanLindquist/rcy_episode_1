import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(18);
  const [inputValue, setInputValue] = useState("");

  const increaseAge = () => {
    setAge(age + 1);
    console.log(age);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="App">
      {age} <button onClick={increaseAge}> Increase Age </button>
      <input type="text" onChange={handleInputChange} />
      {inputValue}
    </div>
  );
}

export default App;
