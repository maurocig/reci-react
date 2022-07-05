import { useEffect } from 'react';
import ItemCount from './ItemCount/ItemCount';
import ItemList from './ItemList/ItemList';
import { useState } from 'react';

const productosIniciales = [
	{ name: 'pera', id: 0, price: 100, stock: 5 },
	{ name: 'manzana', id: 1, price: 50, stock: 3 },
	{ name: 'banana', id: 2, price: 70, stock: 9 },
	{ name: 'melon', id: 3, price: 90, stock: 2 },
]

const promesa = new Promise((res, rej) => {
	setTimeout(() => {
		res(productosIniciales);
	}, 3000);
})

const ItemListContainer = (props) => {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		promesa.then((data) => {
			console.log(data);
			setProducts(data);
		})
			.catch(() => {
				console.log('todo mal');
			})
	})

	const onAdd = () => {
		alert(`gracias por tu compra`);
	}
	return (
		<div style={{ border: 'solid 3px red' }}>
			<h1>
				{props.greeting}
			</h1>
			<ItemList />
			<ItemCount stock={3} onAdd={onAdd} />
			{products.map((product) => <h2 key={product.id}>{product.name}</h2>)}
		</div>
	)
}

export default ItemListContainer;