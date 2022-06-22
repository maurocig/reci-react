// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Header from './Components/Header/Header';
import Item from './Components/Item';
import Input from './Components/Input';
import Title from './Components/Title';
import { useState } from 'react';
import ItemListContainer from './Components/ItemListContainer';

// Componente contenedor / State components
function App({ name, children, app, saludaPapa, }) {
	// variable o atributo del estado react
	const [data] = useState(['Ingrese su nombre', 'Ingrese su apellido', 'Ingrese su DNI']);

	const saludoYoHijo = () => console.log('hola, saludo yo hijo')

	return (
		<div className="App">
			<Navbar style={{ backgroundColor: 'blue' }} />
			<ItemListContainer greeting="Esto es un mensaje para cumplir con la consigna." />
			<Header />

			<button onClick={saludoYoHijo}>Saludar hijo</button>
			<button onClick={saludaPapa}>Saludar papa</button>

			<Item value={'CLICK ACÁ.'} />
			<Title name="Reci Importaciones Ltda." />

			{
				data.map((item) => {
					return (
						<Input key={item} placeholder={item} />
						// los items del map deben tener un key o te tira error.
					)
				})
			}
			{children}

		</div>
	);
}

export default App;
