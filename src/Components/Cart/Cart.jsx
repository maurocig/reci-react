import { useContext } from 'react';
import style from './Cart.module.css'
import { contexto } from '../../Context/CartContext';


export default function Cart() {
	const { products } = useContext(contexto);

	console.log(products);
	return (
		<div className={style.container}>
			<h2>Soy el carrito</h2>
			<ul>

				{
					products.length > 0
						? (products.map((item, index) => (
							<li key={index}>
								<strong>{item.qty}</strong> {item.type} {item.title}
							</li>
						)))
						: <h3>No hay productos para mostrar</h3>
				}

			</ul>
		</div>
	)
}

