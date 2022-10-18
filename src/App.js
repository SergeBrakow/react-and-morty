import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import Card from './components/Card';
import NavBar from './components/NavBar';



function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <AppHeader/>
      <main>
        <Card name="Morty Smith" onBtnClick="" img="https://rickandmortyapi.com/api/character/avatar/2.jpeg"/>        
      </main>
      <NavBar page={page} setPage={setPage}/>
    </div>
  );
}

export default App;
