import React from 'react';
import { Link } from 'react-router-dom';
import style from './Item.module.css';

const Item = ({ item, children }) => {

	return (
		<div className={style.card}>
			<h3>
				{item.type === 'carrocerias' && `${item.brand} `}
				{item.title}
			</h3>

			<div className={style.itemThumbnail}>
				<img src={item.pictureUrl} alt="" />
			</div>

			<p>{item.description}</p>

			<Link className={style.btnMoreLink} to={`/items/${item.id}`}>
				<button className={style.btnMore}>Ver más</button>
			</Link>
		</div>
	)
}

export default Item;