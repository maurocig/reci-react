import React, { useEffect, useState, createContext } from 'react';

export const contexto = createContext();
const { Provider } = contexto;	// Provider es una palabra reservada.

const CustomProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		console.log(products)
	}, [products])

	const addProduct = (item, count) => {
		if (isInList(item)) {
			const aux = [...products];
			const found = aux.find((p) => p.id === item.id);
			found.qty += count;
			setProducts(aux);

		} else {
			const newProduct = { ...item, qty: count };
			setProducts([...products, newProduct]);
		}
	}


	const removeProduct = (product) => {
		console.log(`esta funcion quita el producto ${product.title}`);
		let aux = [...products];
		aux = aux.filter((el) => el.id !== product.id)
		setProducts(aux);
	}

	const resetList = () => {
		console.log('esta función resetea la lista');
	}

	function isInList(product) {

		if (products.length !== 0) {
			const foundItem = products.find((item) => item.id === product.id);
			return foundItem;
		} else {
			return false;
		}

	}

	return (
		<Provider value={{ products, addProduct, removeProduct, resetList, isInList }}> {/* llaves para indicar que es un objeto. */}
			{children}
		</Provider>
	)
}

export default CustomProvider
