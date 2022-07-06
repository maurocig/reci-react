import styles from './Item.module.css';

const Item = ({ item, children }) => {

	return (
		<div className={styles.card}>
			<h4>{item.title}</h4>

			<div className={styles.itemThumbnail}>
				<img src={item.pictureUrl} alt="" />
			</div>

			<p>{item.description}</p>

			<button>Ver más</button>
		</div>
	)
}

export default Item;