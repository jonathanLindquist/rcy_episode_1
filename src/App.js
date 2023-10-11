import "./App.css";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="App">
      {/* <AppContext.Provider value={{ userName, setUserName }}>
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
      </AppContext.Provider> */}
      <Form />
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
