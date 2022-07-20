import { useContext } from 'react';
import style from './Cart.module.css'
import { contexto } from '../../Context/CartContext';


export default function Cart() {
	const { products } = useContext(contexto);

	console.log(products);
	return (
		<div className={style.container}>
			<h2>Tus productos</h2>
			<ul className={style.ulContainer}>
				{
					products.length > 0
						? (products.map((item, index) => (
							<li key={index}>
								<div className={style.imgContainer}>
									<img src={item.pictureUrl} alt="" />
								</div>
								<div className={style.itemText}>
									<span>{item.type.toUpperCase()} {item.title} </span>
									<span><strong>{item.qty}</strong></span>
								</div>
							</li>
						)))
						: <h3>No hay productos para mostrar</h3>
				}
			</ul>
		</div>
	)
}

