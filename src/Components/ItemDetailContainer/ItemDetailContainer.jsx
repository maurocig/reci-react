import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import ProductosIniciales from '../../assets/productosIniciales.json'

const ItemDetailContainer = ({ props }) => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		const getProduct = async () => {
			try {

				// const response = await fetch('https://fakestoreapi.com/products');
				// const data = await response.json();

				const data = ProductosIniciales;

				setProduct(data[0]);
			}
			catch (err) {
				console.log(err)
			}
		}

		getProduct();
	}, [])

	return (
		<div className="container">
			<ItemDetail product={product} />
		</div>

	)

}

export default ItemDetailContainer;