import './App.css';
import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { action, comedy, horrorMovies, originals, romanceMovies } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall/>
      <RowPost url={comedy} title="Romance" isSmall/>
      <RowPost url={horrorMovies} title="Horror" isSmall/>
    </div>
  );
}

export default App;
