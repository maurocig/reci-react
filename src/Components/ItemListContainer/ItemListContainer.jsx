import styles from './ItemListContainer.module.css';
import ItemList from '../ItemList/ItemList';
import productosIniciales from '../../assets/productosIniciales.json';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';

import { getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = (props) => {

	const { categoryName } = useParams();

	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		const productCollection = collection(db, 'productosIniciales');
		let q;
		categoryName
			? q = query(productCollection, where('type', '==', categoryName))
			: q = productCollection;
		getDocs(q)
			.then(result => {
				const lista = result.docs.map((doc) => {
					return {
						id: doc.id,
						...doc.data()
					};
				})
				setProducts(lista)
				setLoading(false)
			})

		/* const getProducts = async () => { */
		/* 	try { */
		/* 		const response = await fetch('https://fakestoreapi.com/products/') */
		/* 		const data = await response.json() */
		/* 		setProducts(data) */
		/* 	} */
		/* 	catch (err) { */
		/* 		console.log(err); */
		/* 		setError(true); */
		/* 	} */
		/* 	finally { */
		/* 		setLoading(false); */
		/* 	} */
		/* } */
		/* getProducts(); */

	}, [categoryName])

	return (
		<div className={styles.container}>
			<ItemList products={products} loading={loading} categoria={categoryName} />
		</div>
	)
}

export default ItemListContainer;