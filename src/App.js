// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Foto from './Components/Foto/Foto.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';

import ReactDOM from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";


function App({ name, children, app }) {

	const [show, setShow] = useState(true);

	const cambio = () => {
		setShow(!show);
		console.log(show)
	}
	return (
		<BrowserRouter>
			<Navbar style={{ backgroundColor: 'blue' }} />
			<Routes>
				<Route path="/" element={<ItemListContainer greeting="Bienvenido!" />} />
				<Route path="/productos/:categoryName" element={<ItemListContainer greeting='categoria' />} />
				<Route path="/items/:itemId" element={<ItemDetailContainer />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>

			{/* {show ? <Foto /> : <p>aca no hay nada</p>} */}
			{/* <ItemDetailContainer /> */}

			{children}

			<button onClick={cambio}>click </button>
		</BrowserRouter>
	);
}

export default App;
