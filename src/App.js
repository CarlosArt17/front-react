import imageRickMorty from './img/rick-morty.png'
import imageSpider from './img/credencial.jpg'
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
    
      <header className="App-header">
        <h1 className='title'>API Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
          <img src={imageRickMorty} alt="Rick & Morty" className="img-home"></img>
            <button onClick={reqApi} className='btn-search'>
              Buscar Personajes
            </button>
            <div id="search-form">

            </div>
          </>
        )}   
      </header>
      <footer>
      <div>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p>Hecha por:</p>
                <p>Carlos Arturo Jose Fragoso</p>
                <p>Matricula: S20006730</p>
                <p>6° Semestre - Ingenieria de Software</p>
                <p>Universidad Veracruzana</p>
            </div>
            <div class="col-md-6">
              <p>Enlaces útiles</p>
                <ul>
                  <li><a href="https://github.com/CarlosArt17">GitHub</a></li>
                  <li>Correo: zs20006730@estudiantes.uv.mx</li>
                  <li><img src={imageSpider} alt="Descripción de la imagen" className='image'></img></li>
                </ul>
            </div>
            
          </div>
        </div>
      </div>
      </footer>
      
      
      </div>
  );
}

export default App;
