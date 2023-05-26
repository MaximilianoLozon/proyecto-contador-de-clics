import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const aumentarClic = () =>{
    setNumClics(numClics+1);
  };
  const restarClic = () =>{
    setNumClics(numClics-1);
  };
  const contadorMas10 = () =>{
    setNumClics(numClics + 10);
  };
  const contadorMas100 = () =>{
    setNumClics(numClics + 100);
  };
  const contadorMas1000 = () =>{
    setNumClics(numClics + 1000);
  };
  const reiniciarContador = () =>{
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <div className='logo'>
          <h1>Contador de clic - Maximiliano Lozon dev</h1>
        </div>
      </div>
      <div className='contenedor-principal'>
      <Contador numClics={numClics} />
        <Boton
        texto='sumar clic'
        esBotonDeClic={true}
        manejarClic={aumentarClic} />
        <Boton
        texto='restar clic'
        esBotonDeClic={true}
        manejarClic={restarClic} />
        <Boton
        texto='aumentar en diez'
        esBotonDeClic={false}
        manejarClic={contadorMas10} />
        <Boton
        texto='aumentar en cien'
        esBotonDeClic={false}
        manejarClic={contadorMas100} />
        <Boton
        texto='aumentar en mil'
        esBotonDeClic={false}
        manejarClic={contadorMas1000} />
        <Boton
        texto='reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}
export default App;
