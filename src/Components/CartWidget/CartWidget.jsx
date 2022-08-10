import { React, useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { contexto } from '../../Context/CartContext';
import style from './CartWidget.module.css';


export const CartWidget = () => {
	const { products, cantidadItems } = useContext(contexto);

	return (
		<div className={style.container}>
			{
				cantidadItems > 0
					? <div className={style.cartCount}>{cantidadItems}</div>
					: ''
			}
			<FaShoppingCart className={style.FaShoppingCart} />
		</div>
	)
}