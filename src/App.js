import logo from './garra.svg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Title">
          Hermanos Pequeños
        </p>
        <a
          className="App-link"
          href="https://sites.google.com/a/educacion.navarra.es/patricia-gayarre/_/rsrc/1487796186017/home/Nombres-para-perros.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mas Huellitas
        </a>
      </header>
    </div>
  );
}

export default App;
