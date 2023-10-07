import "./App.css";

function App() {
  return (
    <div className="App">
      <User name="Jonathan" age="34" email="random@test.com" />
      <User name="temp" age="temp" email="temp@test.com" />

      <Job
        salary={40000}
        position="Software Developer"
        company="Temp Company"
      />
      <Job salary={60000} position="Software Developer" company="Optum" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  );
};

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

export default App;
