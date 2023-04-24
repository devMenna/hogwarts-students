import { Route, Routes } from 'react-router-dom';
import Homepage from './features/homePage/Homepage';
import CharacterCreation from './features/character-creation/CharacterCreation';
import Dashboard from './features/dashboard/Dashboard';
import Search from './features/search-engine/Search';
import ResultCard from './features/search-result/ResultCard';
import Footer from './Components/Footer';
import Favorites from './features/favorites/Favorites';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createdUser } from './features/character-creation/characterSlice';

function App() {
  const user = useSelector((state) => state.user.userData);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
    const localUser = JSON.parse(localStorage.getItem('user'));

    if (localUser && !Object.keys(user).length) {
      dispatch(createdUser(localUser));
    }

    if (Object.keys(user).length && !localUser) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user, dispatch]);

  console.log(user);
  const localUser = JSON.parse(localStorage.getItem('user'));

  if (localUser && !Object.keys(user).length) {
    dispatch(createdUser(localUser));
  }

  if (Object.keys(user).length && !localUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }

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
