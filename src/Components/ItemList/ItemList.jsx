import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Loader from '../Loader/Loader';

const ItemList = (props) => {
	const { products, loading, categoria } = props;

	return (
		<>
			<Loader loading={loading} />
			{
				categoria
					? <h3>{categoria}</h3>
					: <h3>Productos</h3>
			}
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