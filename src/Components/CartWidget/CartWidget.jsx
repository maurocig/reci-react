import { React, useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import style from './CartWidget.module.css'
import { contexto } from '../../Context/CartContext';


export const CartWidget = () => {
	const { products, cantidadItems } = useContext(contexto);

	return (
		<>
			{
				cantidadItems > 0
					? <div className={style.cartCount}>{cantidadItems}</div>
					: ''
			}
			<FaShoppingCart className={style.FaShoppingCart} />
		</>
	)
}