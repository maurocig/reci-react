import React, { useEffect, useState, createContext } from 'react';

export const contexto = createContext();
const { Provider } = contexto;	// Provider es una palabra reservada.

const CustomProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		console.log(products)
	}, [products])

	const addProduct = (item, count) => {
		const newProduct = { ...item, qty: count };

		console.log(newProduct)
		setProducts([...products, newProduct]);

	}


	const removeProduct = (product) => {
		console.log('esta funcion quita un producto');
	}

	const resetList = () => {
		console.log('esta función resetea la lista');
	}

	function isInList(product) {
		console.log(products);

		if (products.length !== 0) {
			const foundItem = products.find((item) => item.id === product.id);
			console.log(foundItem)
			return foundItem;
		} else {
			return false;
		}

	}

	const obtenerCantidad = () => {
		console.log('esta funcion obtiene la cantidad de productos.');
	}

	return (
		<Provider value={{ products, addProduct, removeProduct, resetList, obtenerCantidad, isInList }}> {/* llaves para indicar que es un objeto. */}
			{children}
		</Provider>
	)
}

export default CustomProvider
