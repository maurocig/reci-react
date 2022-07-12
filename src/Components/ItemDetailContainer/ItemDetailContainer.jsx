import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import ProductosIniciales from '../../assets/productosIniciales.json'
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ props }) => {
	const [product, setProduct] = useState([]);
	const { itemId } = useParams();

	useEffect(() => {

		const getProduct = async () => {

			try {

				/* // FAKE STORE API */
				/* const response = await fetch('https://fakestoreapi.com/products'); */
				/* const data = await response.json(); */
				/* setProduct(data[0]); */

				const productoDetalle = ProductosIniciales.find((producto) => producto.id == itemId);

				// console.log(productoDetalle)
				setProduct(productoDetalle);

				// console.log(itemId)

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