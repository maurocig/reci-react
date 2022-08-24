import { collection, doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from '../../firebase/firebase';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ props }) => {
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);
	const { itemId } = useParams();

	useEffect(() => {
		const productCollection = collection(db, 'productosIniciales');
		const refDoc = doc(productCollection, itemId);
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
	})

	return (
		<div className="container">
			<ItemDetail loading={loading} product={product} />
		</div>
	)

}

export default ItemDetailContainer;