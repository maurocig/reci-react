import { useEffect } from 'react';
import ItemCount from './ItemCount/ItemCount';
import ItemList from './ItemList/ItemList';
import { useState } from 'react';

const productosIniciales = [

	{
		title: 'C-250e MAX',
		type: 'Equipo',
		serie: 'C',
		description: 'Reparto de cargas sensibles a la temperatura en vehículos de pequeño tamaño',
		id: 0,
		price: 100,
		pictureUrl: '',
		stock: 5
	},

	{
		title: 'V-500',
		type: 'Equipo',
		serie: 'V',
		description: 'La serie V-500 le ofrece una performance óptima, consumiendo menos combustible y de forma silenciosa.',
		id: 0,
		price: 200,
		pictureUrl: 'https://www.mincarone.com.br/fotos/1/1/s%C3%A9rie-v-500-max-thermo-king.jpg',
		stock: 9,
	},

	{
		title: 'T-600R',
		type: 'Equipo',
		serie: 'T',
		description: 'Las unidades T-600R permiten control de temperatura preciso, menor consumo de combustible y operación silenciosa',
		id: 0,
		price: 300,
		pictureUrl: 'https://videfrigo.com.br/wp-content/uploads/2021/04/img_produto_T600R_nv-1536x610.jpg',
		stock: 9,
	},

	{
		title: 'T-880R',
		type: 'Equipo',
		serie: 'T',
		description: 'La unidad T-880R utiliza tecnología QuickTemp y un compresor recíproco que le brinda ahorro de combustible, control de temperatura mejorado y mantenimiento reducido.',
		id: 0,
		price: 500,
		pictureUrl: '',
		stock: 9,
	},
]

const promesa = new Promise((res, rej) => {
	setTimeout(() => {
		res(productosIniciales);
	}, 2000);
})

const ItemListContainer = (props) => {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		promesa.then((data) => {
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
			<ItemList products={products} />
			<ItemCount stock={3} onAdd={onAdd} />
		</div>
	)
}

export default ItemListContainer;