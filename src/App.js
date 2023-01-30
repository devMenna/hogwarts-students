import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Header from "./Components/Header";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Homepage /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
