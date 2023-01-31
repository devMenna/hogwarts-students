import { Route, Routes } from "react-router-dom";
import Homepage from "./features/homePage/Homepage";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Homepage /> } />
      </Routes>
    </div>
  );
}

export default App;
