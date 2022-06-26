import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ myNum }) => {
	const [count, setCount] = useState(0);

	function addOne() {
		setCount(count + 1);
	}

	function substractOne() {
		count > 0 ? setCount(count - 1) : setCount(count);
	}

	function addToCart() {
		if (count > 0) {
			console.log(`se agregaron ${count} items al carrito.`);
		} else {
			console.log(`El carrito está vacío.`);
		}
	}

	return (
		<div className='itemCountWrapper'>
			<h2>Item Count</h2>
			<button onClick={substractOne}>-</button>
			<h3>{count}</h3>
			<button onClick={addOne}>+</button>
			<button id='addBtn' onClick={addToCart}>Agregar al carrito</button>
		</div>
	)
}

export default ItemCount;