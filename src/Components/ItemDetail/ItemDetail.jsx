import { useState, useEffect } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import style from './ItemDetail.module.css'

const ItemDetail = (props) => {
	const { product } = props;
	const [show, setShow] = useState(true);
	const [count, setCount] = useState();


	const onAdd = (items) => {
		setShow(false);
		setCount(items);
	}

	return (
		<div className={style.detailContainer}>
			<h1>ITEM DETAIL</h1>
			<h2>{product.title}</h2>
			<div className={style.pictureContainer}>
				<img src={product.pictureUrl} alt="" />
			</div>

			{/* solo funca con fake store api */}
			<img src={product.image} alt="" />

			<p>{product.description}</p>
			{
				show
					? <ItemCount stock={3} onAdd={onAdd} />
					:
					<>
						<h2>{count} items.</h2>
						<Link to='/cart'> <button>Finalizar Compra</button></Link>
					</>
			}
		</div>
	)
}

export default ItemDetail;