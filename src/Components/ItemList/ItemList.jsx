import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = (props) => {
	const { products } = props;
	return (
		<>
			<h3>Item List</h3>

			<div className={styles.gridContainer}>
				{
					products.map((item) => {
						return (
							<Item key={item.id} item={item} />
						)
					})
				}
			</div>
		</>
	)
}

export default ItemList;