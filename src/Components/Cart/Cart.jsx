import { useContext, useState } from 'react';
import style from './Cart.module.css'
import { contexto } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';


export default function Cart() {
	const { products, removeProduct, calcularTotal, total } = useContext(contexto);


	console.log(products);
	return (
		<div className={style.container}>
			<h2>Tus productos</h2>
			{
				products.length > 0
					? (
						<ul className={style.ulContainer}>
							{products.map((item, index) => (
								<li key={index}>
									<div className={style.imgContainer}>
										<img src={item.pictureUrl} alt="" />
									</div>
									<div className={style.itemText}>
										<span className={style.itemTitle}>
											{item.type === 'carrocerias' && 'Carrocería '}
											{item.type === 'equipos' && 'Equipo '}
											{item.type === 'accesorios' && 'Accesorio '}
											{item.title.toUpperCase()} {item.brand}
										</span>
										<span className={style.itemQty}><strong>{item.qty}</strong> {item.qty > 1 ? 'unidades' : 'unidad'} </span>
									</div>
									<FaTrashAlt className={style.buttonDelete} onClick={() => removeProduct(item)} />
								</li>
							))
							}
							< div className={style.ulResumen}>
								Total: <strong>{total}</strong>
								<Link to="/userForm">
									<button>Finalizar Compra</button>
								</Link>
							</div>
						</ul>
					)

					: (
						<>
							<h3>No tienes productos agregados al carrito.</h3>
							<Link to="/">
								<button>Ver Productos</button>
							</Link>
						</>
					)
			}
		</div >
	)
}

