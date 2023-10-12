import React from "react";
import "./App.css";
import { Person, Country } from "./components/Person";

function App() {
  const getAge = (name: string): number => {
    return 99;
  };

  return (
    <div className="App">
      <Person
        name="Jonathan"
        email="j@j.com"
        age={34}
        isMarried={false}
        friends={["jane", "james", "john"]}
        country={Country.MX}
      />
    </div>
  );
}

export default App;
