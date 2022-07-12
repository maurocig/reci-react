import styles from './Item.module.css';
import { Link } from 'react-router-dom';

const Item = ({ item, children }) => {

	return (
		<div className={styles.card}>
			<h4>{item.title}</h4>

			<div className={styles.itemThumbnail}>
				<img src={item.pictureUrl} alt="" />
			</div>

			<p>{item.description}</p>

			<Link to={`/items/${item.id}`}>
				<button>Ver más</button>
			</Link>
		</div>
	)
}

export default Item;