import items from '../../assets/productosIniciales.json';
import { doc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebase'
import { useEffect } from 'react';

function agregarProductos() {

	items.forEach((producto) => {
		const productosCollection = collection(db, 'productos')
		addDoc(productosCollection, {
			producto
		})
		console.log(producto)
	})

	return (
		console.log('listo')
	)
}
