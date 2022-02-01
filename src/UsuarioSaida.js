import React, {Component} from 'react';
import UsuarioEntrada from './UsuarioEntrada';

class UsuarioSaida extends Component{
	render(props){
		return(
			<div>
				<p>O usuário informado é: {this.props.name}</p>
				<p>Segundo parágrafo com texto qualquer!</p>
			</div>
		);
	}
}

export default UsuarioSaida;
