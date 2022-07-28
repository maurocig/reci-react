// import logo from './logo.svg';
import style from './App.module.css'
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import UserRegForm from './Components/UserRegForm/UserRegForm';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CustomProvider from '../src/Context/CartContext'


function App({ name, children, app }) {

	const [show, setShow] = useState(true);

	return (
		<BrowserRouter style={style}>
			<CustomProvider>
				<Navbar style={{ backgroundColor: 'blue' }} />
				<Routes>
					<Route path="/" element={<ItemListContainer greeting="Bienvenido!" />} />
					<Route path="/productos/:categoryName" element={<ItemListContainer />} />
					<Route path="/items/:itemId" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/userForm" element={<UserRegForm />} />
				</Routes>
				{children}
			</ CustomProvider>
		</BrowserRouter>
	);
}

export default App;
