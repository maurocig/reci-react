import React from "react";
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

export const CartWidget = () => {
	return (
		<button id="CartButton">
			<FaShoppingCart id="FaShoppingCart" />
		</button>
	)
}