import React from "react";
import logo from '../../assets/reci.png'
import './Navbar.css';
import Carrito from "../Carrito/Carrito";

const Navbar = () => (
	<nav >
		<div className="logoContainer">
			<img src={logo} alt="" id="imagen" />
		</div>
		{/* <h1>Reci Importaciones</h1> */}
		<div id="nav-ul">
			<a href="#inicio">Inicio</a>
			<a href="#productos">Productos</a>
			<a href="#nosotros">Nosotros</a>
			<a href="#contacto">Contacto</a>
			<Carrito />
		</div>
		{/* <a href="#!" id="carrito"><img src={ShoppingCartIcon} alt="" /></a> */}
	</nav >
)

export default Navbar;