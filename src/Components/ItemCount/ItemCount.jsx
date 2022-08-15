import React, { useEffect, useState } from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import style from "./ItemCount.module.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
	const [count, setCount] = useState(initial);

	useEffect(() => {
		console.log('useEffect');
	}, [count]);

	function addOne() {
		count < stock && setCount(count + 1);
		count >= stock && alert('No hay stock suficiente del item seleccionado :(');
	}

	function substractOne() {
		count > 1 && setCount(count - 1);
	}

	return (
		<div className={style.itemCountWrapper}>
			{/* <h2>Item Count</h2> */}
			<div className={style.counter}>
				<AiFillMinusCircle className={style.btnCount} onClick={substractOne} />
				<h2>{count}</h2>
				<AiFillPlusCircle className={style.btnCount} onClick={addOne} />
			</div>
			<button className={style.btnAdd} onClick={() => onAdd(count)}>Agregar al carrito</button>
		</div>
	)
}

export default ItemCount;