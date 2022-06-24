import React, { useState } from 'react';

export const Contador = ({ miNumero }) => {
	const [contador, setContador] = useState(0);
	const [usuarios, setUsuarios] = useState([{ Nombre: 'Juan' }, { Nombre: 'Pedro' }]);

	const sumar = () => {
		return (
			setContador(contador + 1)
		)
	}

	const restar = () => {
		return (
			setContador(contador - 1)
		)
	}

	const resetear = () => {
		return (
			setContador(0)
		)
	}

	const agregarDiego = () => {
		const diego = { Nombre: 'Diego' }
		return (
			setUsuarios(...usuarios, diego)
		)
	}

	return (
		< >
			<h3> MiComponente </h3>
			<div>{contador}</div>
			<button onClick={sumar}>Sumar 1</button>
			<button onClick={restar}>Restar 1</button>
			<button onClick={resetear}>Resetear</button>
			<button onClick={agregarDiego}>agregar a Diego</button>
		</>
	)
}