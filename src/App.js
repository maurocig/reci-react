// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Foto from './Components/Foto/Foto.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './Components/ItemDetail/ItemDetail'

function App({ name, children, app, saludaPapa, }) {

	const [show, setShow] = useState(true);

	const cambio = () => {
		setShow(!show);
		console.log(show)
	}
	return (
		<div className="App">
			<Navbar style={{ backgroundColor: 'blue' }} />
			<ItemListContainer greeting="ItemListContainer" />
			{show ? <Foto /> : <p>aca no hay nada</p>}

			<ItemDetailContainer>
				<ItemDetail />
			</ItemDetailContainer>

			{children}

			<button onClick={cambio}>click </button>
		</div>
	);
}

export default App;
