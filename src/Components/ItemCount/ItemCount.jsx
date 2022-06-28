import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial }) => {
	const [count, setCount] = useState(initial);

	function addOne() {
		if (count < stock) {
			setCount(count + 1);
		} else {
			console.log('No hay stock suficiente del item seleccionado :(')
		}
	}

	function substractOne() {
		count > 0 ? setCount(count - 1) : setCount(count);
	}

	function onAdd() {
		if (count > 0 && count <= stock) {
			console.log(`se agregaron ${count} items al carrito.`);
		} else if (count === 0) {
			console.log(`El carrito está vacío.`);
		} else if (count > stock) {
			console.log('No hay stock suficiente del item seleccionado :(')
		}
	}

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