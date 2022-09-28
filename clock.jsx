import React, { Component, useState, useEffect } from 'react';
import '../../styles/clock.scss';

export class Clock extends Component {
	constructor(props) {
		super(props);
		// Estado privado del component
		this.state = {
			// Se genera una fecha como estado inicial del componente
			fecha: new Date(),
			edad: 0,
			nombre: 'Martín',
			apellidos: 'San José',
		};
	}
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	render() {
		return (
			<div>
				<h2>
					Hora Actual:
					{this.state.fecha.toLocaleTimeString()}
				</h2>
				<h3>
					{this.state.nombre} {this.state.apellidos}
				</h3>
				<h1>Edad: {this.state.edad}</h1>
			</div>
		);
	}
	tick() {
		this.setState((prevState) => {
			let edad = prevState.edad + 1;
			return {
				...prevState,
				fecha: new Date(),
				edad,
			};
		});
	}
}

export const ClockHook = () => {
	// Valor inicial para la fecha
	const fechaInicial = new Date();

	// Valor inicial para la persona
	const personaInicial = {
		edad: 0,
		nombre: 'Martín',
		apellidos: 'San José',
	};

	const [fecha, setFecha] = useState(fechaInicial);
	const [persona, setPersona] = useState(personaInicial);

	function cambiarFecha() {
		setFecha(new Date());
	}

	function incrementarEdad() {
		setPersona({
			edad: persona.edad + 1,
			nombre: persona.nombre,
			apellidos: persona.apellidos,
		});
	}

	useEffect(() => {
		const intervalID = setInterval(() => {
			cambiarFecha();
			incrementarEdad();
		}, 1000);
		return () => {
			clearInterval(intervalID);
		};
	});

	return (
		<div>
			<h2>Hora Actual: {fecha.toLocaleTimeString()}</h2>
			<h3>
				{persona.nombre} {persona.apellidos}
			</h3>
			<h1>Edad: {persona.edad}</h1>
		</div>
	);
};
