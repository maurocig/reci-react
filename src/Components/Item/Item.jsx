const Item = ({ item, children }) => {
	return (
		<>
			<h4>{item.title}</h4>
			<img src={item.pictureUrl} alt="" />
			<p>{item.description}</p>
			{children}
		</>
	)
}

export default Item;