import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import ProductosIniciales from '../../assets/productosIniciales.json'
import { useParams } from "react-router-dom";
import { db } from '../../firebase/firebase';
import { getDoc, collection, doc, query, where } from 'firebase/firestore'

const ItemDetailContainer = ({ props }) => {
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);
	const { itemId } = useParams();

	useEffect(() => {
		const productCollection = collection(db, 'productosIniciales');
		const refDoc = doc(productCollection, itemId);
		// const refDoc = query(productCollection, where('id', '==', itemId));
		getDoc(refDoc)
			.then((result) => {
				console.log(result)
				const producto = {
					id: result.id,
					...result.data()
				}
				setProduct(producto);
				setLoading(false);
				console.log(producto)
			})
			.catch((err) => console.log(err))

		// 		const getProduct = async () => {
		// 			try {
		// 				/* // FAKE STORE API */
		// 				/* const response = await fetch('https://fakestoreapi.com/products'); */
		// 				/* const data = await response.json(); */
		// 				/* setProduct(data[0]); */
		// 
		// 				const productoDetalle = await ProductosIniciales.find((producto) => {
		// 					return producto.id === parseInt(itemId);
		// 				})
		// 				setProduct(productoDetalle);
		// 			}
		// 			catch (err) {
		// 				console.log(err)
		// 			}
		// 		}
		// 		getProduct();
	}, [])

	return (
		<div className="container">
			<ItemDetail loading={loading} product={product} />
		</div>
	)

}

export default ItemDetailContainer;