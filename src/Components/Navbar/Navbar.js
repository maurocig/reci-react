import React from "react";
import logo from '../../assets/reci.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';

const Navbar = () => (
	<nav>
		<div>
			<img src={logo} alt="" id="imagen" />
		</div>
		<h1>Reci Importaciones</h1>
		<div id="nav-ul">
			<a href="#inicio">Inicio</a>
			<a href="#productos">Productos</a>
			<a href="#nosotros">Nosotros</a>
			<a href="#contacto">Contacto</a>
			<ShoppingCartIcon color="info" sx={{ fontSize: 30 }} />
		</div>
		{/* <a href="#!" id="carrito"><img src={ShoppingCartIcon} alt="" /></a> */}
	</nav>
)

export default Navbar;