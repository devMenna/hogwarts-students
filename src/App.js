import { Route, Routes } from 'react-router-dom';
import Homepage from './features/homePage/Homepage';
import CharacterCreation from './features/character-creation/CharacterCreation';
import Dashboard from './features/dashboard/Dashboard';
import Search from './features/search-engine/Search';
import ResultCard from './features/search-result/ResultCard';
import Footer from './Components/Footer';
import Favorites from './features/favorites/Favorites';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/character-creation' element={<CharacterCreation />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/potions' element={<Search />} />
        <Route path='/spells' element={<Search />} />
        <Route path='potions/:id' element={<ResultCard />} />
        <Route path='spells/:id' element={<ResultCard />} />
        <Route path='favorites' element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
