import { useContext, useState } from 'react';
import style from './Cart.module.css'
import { contexto } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { doc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { FaTrashAlt } from 'react-icons/fa';
import { db } from '../../firebase/firebase'


export default function Cart() {
	const { products, removeProduct, calcularTotal, total } = useContext(contexto);
	const { idVenta, setIdVenta } = useState();

	const datosComprador = {
		nombre: 'Juan',
		apellido: 'Perez',
		email: 'juan@gmail.com'
	}

	const finalizarCompra = () => {
		const ventasCollection = collection(db, 'ventas');
		addDoc(ventasCollection, {
			datosComprador,
			items: products,
			date: serverTimestamp(),
			total: total,
		})
			.then((result) => {
				setIdVenta(result.id);
			})
		console.log('agregada.')
	}

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
										<span className={style.itemTitle}>{item.type.toUpperCase()} {item.title.toUpperCase()} {item.brand} </span>
										<span className={style.itemQty}><strong>{item.qty}</strong> {item.qty > 1 ? 'unidades' : 'unidad'} </span>
									</div>
									<FaTrashAlt className={style.buttonDelete} onClick={() => removeProduct(item)} />
								</li>
							))
							}
							< div className={style.ulResumen}>
								Total: <strong>{total}</strong>
								<button onClick={finalizarCompra}>Finalizar Compra</button>
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

