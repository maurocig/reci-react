import React from "react";
import logo from '../../assets/reci.png'

const Navbar = () => (
	<nav>
		<div>
			<img src={logo} alt="" id="imagen" />
		</div>
		<h1>Reci Importaciones</h1>
		<a href="#inicio">Inicio</a>
		<a href="#productos">Productos</a>
		<a href="#nosotros">Nosotros</a>
		<a href="#contacto">Contacto</a>
	</nav>
)

export default Navbar;