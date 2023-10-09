import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(18);
  const [inputValue, setInputValue] = useState("");
  const [showText, setShowText] = useState(true);

  const increaseAge = () => {
    setAge(age + 1);
    console.log(age);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  const toggleNameHandler = () => {
    setShowText(!showText);
  };

  return (
    <div className="App">
      {age} <button onClick={increaseAge}> Increase Age </button>
      <input type="text" onChange={handleInputChange} />
      {inputValue}
      <div>
        <button onClick={toggleNameHandler}>Show/Hide</button>
        {showText === true && <h1>My name is Jonathan</h1>}
      </div>
    </div>
  );
}

export default App;
