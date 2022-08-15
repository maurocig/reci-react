import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomProvider from '../src/Context/CartContext';
import style from './App.module.css';
import Cart from './Components/Cart/Cart';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';
import UserRegForm from './Components/UserRegForm/UserRegForm';


function App({ name, children, app }) {
	useEffect(() => {
		document.title = 'Reci Importaciones';
	}, [])
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
