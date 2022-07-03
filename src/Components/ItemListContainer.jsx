import ItemCount from './ItemCount/ItemCount';

const ItemListContainer = (props) => {
	const onAdd = () => {
		alert(`gracias por tu compra`);
	}
	return (
		<div style={{ border: 'solid 3px red' }}>
			<h2>
				{props.greeting}
				<ItemCount stock={3} onAdd={onAdd} />
			</h2>
		</div>
	)
}

export default ItemListContainer;