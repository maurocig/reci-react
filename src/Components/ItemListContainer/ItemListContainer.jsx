import styles from './ItemListContainer.module.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import productosIniciales from '../../assets/productosIniciales.json';

import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
// import cartel from '../img/cartel.jpg';

const ItemListContainer = (props) => {

	const { categoryName } = useParams();

	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getProducts = async () => {
			// ponemos await antes de hacer una promesa.

			try {

				// // FAKE STORE API
				// const response = await fetch('https://fakestoreapi.com/products');
				// const data = await response.json();

				// Local
				const data = await productosIniciales;
				setProducts(data);
			}
			catch (err) {
				console.log(err);
				setError(true);
			}
			finally {
				setLoading(false);
			}
		}

		getProducts();

		// para que el código se ejecute solamente cuando el componente se monta, se deja el array de dependencia vacío.
	}, [categoryName])

	const onAdd = () => {
		alert(`gracias por tu compra`);
	}
	return (
		<div className={styles.container}>
			<h1> {props.greeting} </h1>
			{
				loading ? <p style={{ color: 'white' }}>Loading...</p> :
					error ? <strong style={{ color: 'red' }}>Error</strong> :
						<ItemList products={products} />
			}
			<ItemCount stock={3} onAdd={onAdd} />
		</div>
	)
}

export default ItemListContainer;