import React, { useEffect, useState } from 'react';
import styles from "./ItemCount.module.css";

const ItemCount = ({ stock, initial = 0, onAdd }) => {
	const [count, setCount] = useState(0);
	// const [numero, setNumero] = useState(0);


	useEffect(() => {
		console.log('useEffect');
		/* setNumero(numero + 1); */
		/* console.log(`el contador fue modificado ${numero} veces`); */
	}, [count]);

	function addOne() {
		count < stock && setCount(count + 1);
		count >= stock && alert('No hay stock suficiente del item seleccionado :(');
	}

	function substractOne() {
		count > 0 && setCount(count - 1);
	}

	/* function onAdd() { */
	/* 	count > 0 && count <= stock && console.log(`se agregaron ${count} items al carrito.`); */
	/* 	count === 0 && console.log(`El carrito está vacío.`); */
	/* 	count > stock && console.log('No hay stock suficiente del item seleccionado :(') */
	/* } */

	return (
		<div className={styles.itemCountWrapper}>
			<h2>Item Count</h2>
			<div className={styles.counter}>
				<button onClick={substractOne}>-</button>
				<h3>{count}</h3>
				<button onClick={addOne}>+</button>
				<button id='addBtn' onClick={onAdd}>Agregar al carrito</button>
			</div>
		</div>
	)
}

export default ItemCount;