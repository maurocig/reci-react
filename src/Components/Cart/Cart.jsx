import { contexto } from '../CartContext/CartContext';
import { useContext } from 'react';
import style from './Cart.module.css'


export default function Cart() {
	const { products } = useContext(contexto);

	console.log(products);
	return (
		<div className={style.container}>
			<h1>Soy el carrito</h1>
			<ul>

				{
					products.map((item) => (
						<li>
							<strong>{item.qty}</strong> {item.type} {item.title}
						</li>
					))
				}

			</ul>
		</div>
	)
}

