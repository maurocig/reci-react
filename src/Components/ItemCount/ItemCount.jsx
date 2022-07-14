import React, { useEffect, useState } from 'react';
import styles from "./ItemCount.module.css";

const ItemCount = ({ stock, initial = 0, onAdd }) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log('useEffect');
	}, [count]);

	function addOne() {
		count < stock && setCount(count + 1);
		count >= stock && alert('No hay stock suficiente del item seleccionado :(');
	}

	function substractOne() {
		count > 0 && setCount(count - 1);
	}

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