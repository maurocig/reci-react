import ItemList from '../ItemList/ItemList';
import styles from './ItemListContainer.module.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';

import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = (props) => {

	const { categoryName } = useParams();

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		const productCollection = collection(db, 'productosIniciales');
		let q;
		categoryName
			? q = query(productCollection, where('type', '==', categoryName))
			: q = productCollection;

		getDocs(q).then(result => {
			const lista = result.docs.map((snapshot) => {
				return {
					id: snapshot.id,
					...snapshot.data()
				};
			})
			setProducts(lista)
			setLoading(false)
		})

	}, [categoryName])

	return (
		<div className={styles.container}>
			<ItemList products={products} loading={loading} categoria={categoryName} />
		</div>
	)
}

export default ItemListContainer;