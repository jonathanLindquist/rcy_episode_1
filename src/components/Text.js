import { useState, useEffect } from "react";

const Text = () => {
  const [currentValue, setCurrentValue] = useState("");

  const updateValue = (event) => {
    setCurrentValue(event.target.value);
  };

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  return (
    <div>
      <input onChange={updateValue}></input>
      <p>{currentValue}</p>
    </div>
  );
};

export default Text;

// Lifecycle stages
//
// mounting
// updating
// unmounting
