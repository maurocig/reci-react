import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Loader from '../Loader/Loader';

const ItemList = (props) => {
	const { products } = props;
	const { loading } = props;

	return (
		<>
			<h3>Item List</h3>
			<Loader loading={loading} />
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