import Item from '../Item/Item';

const ItemList = (props) => {
	const { products } = props;
	return (
		<div className="ItemList">
			<h3>Item List</h3>

			{
				products.map((item) => {
					return (
						<Item item={item} />
					)
				})
			}
		</div>
	)
}

export default ItemList;