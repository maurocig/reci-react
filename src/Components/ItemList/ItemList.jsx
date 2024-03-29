import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import style from './ItemList.module.css';

const ItemList = (props) => {
	const { products, loading, categoria } = props;

	return (
		<>
			<Loader loading={loading} />
			{
				categoria
					? (
						<>
							<h1>
								{categoria === 'carrocerias' && 'Carrocerías'}
								{categoria === 'equipos' && 'Equipos de Frío'}
								{categoria === 'accesorios' && 'Accesorios'}
							</h1>
							<h2 className={style.subHeader}>
								{categoria === 'equipos' && 'Línea Thermo King'}
								{categoria === 'carrocerias' && 'Línea Liderkit'}
								{categoria === 'accesorios' && 'Línea Cargotrack'}
							</h2>
						</>
					)
					: <h1>Productos</h1>
			}
			<div className={style.gridContainer}>
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