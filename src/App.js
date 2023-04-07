import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom'
import Detail from './components/Detail';
import About from './components/About';

const URL_Base='http:/be-a-rym.up.railway.app/api/docs'
const API_KEY= 'b49d68a5ce96.0b5bf664306a2613d9bf'//Mi api del correo aqui 
function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   return ( 
   <div className='App'>
      <Nav onSearch={onSearch} />
      <Routes>
         <Route path='/home'  element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/about'  element={<About/>}/>
         <Route path='/detail/:id'  element={<Detail/>}/>
      </Routes>
     
         
         
      </div>
   );
}

export default App;