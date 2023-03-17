import { Route, Routes } from "react-router-dom";
import Homepage from "./features/homePage/Homepage";
import CharacterCreation from "./features/character-creation/CharacterCreation";
import Dashboard from "./features/dashboard/Dashboard";
import Search from "./features/search-engine/Search";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Homepage /> } />
        <Route path="/character-creation" element={ <CharacterCreation /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/potions-and-spells" element={ <Search />} />
      </Routes>
    </div>
  );
}

export default App;
