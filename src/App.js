import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(18);
  const [inputValue, setInputValue] = useState("");
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("black");

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

  const toggleColorHandler = () => {
    setTextColor(textColor === "black" ? "green" : "black");
  };

  return (
    <div className="App">
      {age} <button onClick={increaseAge}> Increase Age </button>
      <input type="text" onChange={handleInputChange} />
      {inputValue}
      <div>
        <button onClick={toggleNameHandler}>Show/Hide</button>
        {showText === true && (
          <h1 style={{ color: textColor }}>My name is Jonathan</h1>
        )}

        <button onClick={toggleColorHandler}>Toggle Color</button>
      </div>
    </div>
  );
}

export default App;
