// import { useState, useEffect } from 'react';

const ItemDetail = (props) => {
	const { product } = props;

	return (
		<div>
			<h1>ITEM DETAIL</h1>
			<h2>{product.title}</h2>
			<img src={product.pictureUrl} alt="" />

			{/* solo funca con fake store api */}
			<img src={product.image} alt="" />

			<p>{product.description}</p>
		</div>
	)
}

export default ItemDetail;