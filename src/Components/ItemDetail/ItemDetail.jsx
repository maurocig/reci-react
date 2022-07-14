import { useState, useEffect } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

const ItemDetail = (props) => {
	const { product } = props;
	const [show, setShow] = useState(true);


	const onAdd = (event) => {
		console.log('onAdd');
		setShow(false);

	}

	return (
		<div>
			<h1>ITEM DETAIL</h1>
			<h2>{product.title}</h2>
			<img src={product.pictureUrl} alt="" />

			{/* solo funca con fake store api */}
			<img src={product.image} alt="" />

			<p>{product.description}</p>
			{show
				? <ItemCount stock={3} onAdd={onAdd} />
				: <Link to='/cart'><button>Finalizar Compra</button></Link>}
		</div>
	)
}

export default ItemDetail;