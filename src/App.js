import React from 'react';
import './App.css';
import UsuarioEntrada from './UsuarioEntrada';
import UsuarioSaida from './UsuarioSaida';

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
