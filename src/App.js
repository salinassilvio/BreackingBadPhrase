<<<<<<< HEAD
import React,{useState} from 'react';
import Frase from './components/Frase'
import styled from '@emotion/styled';

const Contenedor = styled.div`
    display:flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
`;


const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%,#0f574e 100%);
  background-size:300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;
=======
import React from 'react';

>>>>>>> cd457b60d140274b6279ed81f8736a03deeaf2e1

function App() {

  //State de frases
  const [frase, guardarFrase] = useState({});

  const consultarAPI = async ()=>{
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    guardarFrase(frase[0]);
  }

  return (
<<<<<<< HEAD
    <Contenedor>
        <Frase
          frase ={frase}
        ></Frase>
        <Boton
          onClick={consultarAPI }
        > 
      Obtener Frase
    </Boton>
    </Contenedor>
=======
    <h1>App de frases de BreakingBad</h1>
>>>>>>> cd457b60d140274b6279ed81f8736a03deeaf2e1
  );
}

export default App;
