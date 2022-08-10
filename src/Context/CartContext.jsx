import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react';
import { db } from '../firebase/firebase';

export const contexto = createContext();
const { Provider } = contexto;	// Provider es una palabra reservada.

const CustomProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [cantidadItems, setCantidadItems] = useState([]);
	const [total, setTotal] = useState([]);
	const [idVenta, setIdVenta] = useState('default');

	useEffect(() => {
		console.log(products);
		itemCount();
		calcularTotal();
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

	function itemCount() {
		let totalItems = 0;
		products.map((p) => totalItems += p.qty);
		setCantidadItems(totalItems);
	}

	function calcularTotal() {
		let total = 0;
		products.map((p) => {
			return total += (p.price * p.qty);
		})
		console.log(total);
		setTotal(total);
		return total;
	}

	// const datosComprador = {
	// 	nombre: 'Juan',
	// 	apellido: 'Perez',
	// 	email: 'juan@gmail.com'
	// }

	const finalizarCompra = (datosComprador) => {
		const ventasCollection = collection(db, 'ventas');
		addDoc(ventasCollection, {
			datosComprador,
			items: products,
			date: serverTimestamp(),
			total: total,
		})
			.then((result) => {
				// setIdVenta(result.id);
				setIdVenta(result.id);
				console.log(result.id)
			})
		console.log(idVenta)
	}


	return (
		<Provider value={{ products, addProduct, removeProduct, resetList, isInList, calcularTotal, cantidadItems, total, finalizarCompra, idVenta }}>
			{children}
		</Provider>
	)
}

export default CustomProvider
