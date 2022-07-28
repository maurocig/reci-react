import style from './UserRegForm.module.css';
import { contexto } from '../../Context/CartContext';

import { useState } from 'react';
import { useContext } from 'react';



export default function UserRegForm() {

	const [datos, setDatos] = useState({
		nombre: '',
		apellido: '',
		email: ''
	});
	const [show, setShow] = useState(false);

	const { finalizarCompra, idVenta } = useContext(contexto);

	const handleInputChange = (event) => {
		// console.log(event.target.value)
		setDatos({
			...datos,
			[event.target.name]: event.target.value
		})
		console.log(datos);
	}

	const sendData = (event) => {
		event.preventDefault();
		finalizarCompra(datos)
		setShow(true);
		console.log(`datos: ${datos}`)

	}


	return (
		<>
			{
				show
					?
					< >
						<h3>Compra exitosa</h3>
						<p>Id de venta: {idVenta}</p>
					</>

					:
					<form action="" className={style.formContainer} onSubmit={sendData}>
						<h1>Registro de usuario</h1>
						<input type="text" placeholder='Nombre' name='nombre' id='nombre' onChange={handleInputChange} />
						<input type="text" placeholder='Apellido' name='apellido' id='apellido' onChange={handleInputChange} />
						<input type="email" placeholder='E-mail' name='email' id='email' onChange={handleInputChange} />
						<button type='submit'>Finalizar compra</button>
					</form>

			}
		</>
	)
}
