// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
// import { useState } from 'react';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';

// Componente contenedor / State components
function App({ name, children, app, saludaPapa, }) {
	// variable o atributo del estado react


	return (
		<div className="App">
			<Navbar style={{ backgroundColor: 'blue' }} />
			<ItemListContainer greeting="Esto es un mensaje para cumplir con la consigna." />

			{children}

		</div>
	);
}

export default App;
