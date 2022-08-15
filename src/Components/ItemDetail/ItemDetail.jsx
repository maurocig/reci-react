import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { contexto } from '../../Context/CartContext';
import ItemCount from "../ItemCount/ItemCount";
import Loader from '../Loader/Loader';
import style from './ItemDetail.module.css';

const ItemDetail = (props) => {
	const { product, loading } = props;
	const [show, setShow] = useState(true);
	const [count, setCount] = useState();
	const { addProduct } = useContext(contexto);

	const onAdd = (count) => {
		setCount(count);
		if (count > 0) {
			addProduct(product, count);
			setShow(false);
		}
	}


	return (
		<div className={style.detailContainer}>
			{loading && <Loader loading={loading} />}

			<div className={style.pictureContainer}>
				<img src={product.pictureUrl} alt="" />
			</div>

			<div className={style.infoContainer}>
				<h2>
					{product.type === 'carrocerias' && 'Carrocería '}
					{product.type === 'equipos' && 'Equipo '}
					{product.type === 'accesorios' && 'Accesorio '}
					{product.brand} {product.title}
				</h2>
				<p>{product.description}</p>
				<p><strong>{`USD $${product.price}`}</strong></p>
				{
					show
						? <ItemCount stock={product.stock} onAdd={onAdd} />
						:
						<>
							<h3 className={style.onAddConfirmation}>Agregaste {count} items.</h3>
							<Link to='/cart'> <button>Finalizar Compra</button></Link>
						</>
				}
			</div>
		</div>
	)
}

export default ItemDetail;