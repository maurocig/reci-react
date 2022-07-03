import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial = 0, onAdd }) => {
	const [count, setCount] = useState(initial);

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
		<div className='itemCountWrapper'>
			<h2>Item Count</h2>
			<button onClick={substractOne}>-</button>
			<h3>{count}</h3>
			<button onClick={addOne}>+</button>
			<button id='addBtn' onClick={onAdd}>Agregar al carrito</button>
		</div>
	)
}

export default ItemCount;