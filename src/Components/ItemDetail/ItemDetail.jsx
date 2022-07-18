import { useState, useEffect, useContext } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import style from './ItemDetail.module.css';
import { contexto } from '../../Context/CartContext';

const ItemDetail = (props) => {
	const { product } = props;
	const [show, setShow] = useState(true);
	const [count, setCount] = useState();
	const { addProduct, products, isInList } = useContext(contexto);

	const onAdd = (count) => {

		if (isInList(product)) {
			alert('producto duplicado')
		} else {
			setShow(false);
			setCount(count);
			addProduct(product, count);
		}

		// isInList(product.id) ? alert('ese item ya está en el carrito')
		// 	: addProduct(product, count);

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
						<h2>Agregaste {count} items.</h2>
						<Link to='/cart'> <button>Finalizar Compra</button></Link>
					</>
			}
		</div>
	)
}

export default ItemDetail;