import { useContext } from 'react';
import style from './Cart.module.css'
import { contexto } from '../../Context/CartContext';


export default function Cart() {
	const { products } = useContext(contexto);

	console.log(products);
	return (
		<div className={style.container}>
			<h1>Soy el carrito</h1>
			<ul>

				{
					products.map((item, index) => (
						<li key={index}>
							<strong>{item.qty}</strong> {item.type} {item.title}
						</li>
					))
				}

			</ul>
		</div>
	)
}

