import React from 'react';
import './App.css';
import UsuarioEntrada from './Components/UsuarioEntrada';
import UsuarioSaida from './Components/UsuarioSaida';

function App() {
  return (
		<div>
			<center>
				<UsuarioEntrada />
        <UsuarioSaida name="Isadora" />
			</center>
		</div>
  );
}

export default App;
