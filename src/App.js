import { Route, Routes } from "react-router-dom";
import Homepage from "./features/homePage/Homepage";
import CharacterCreation from "./features/character-creation/CharacterCreation";
import { Dashboard } from "@mui/icons-material";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/character-creation" element={ <CharacterCreation /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
      </Routes>
    </div>
  );
}

export default App;
