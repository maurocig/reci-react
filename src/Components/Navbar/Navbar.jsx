import React from "react";
import styles from './Navbar.module.css'
import logo from '../../assets/reci.png'
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

	const categories = [
		{ name: 'equipos', id: 0, route: '/productos/equipos' },
		{ name: 'carrocerias', id: 1, route: '/productos/carrocerias' },
		{ name: 'accesorios', id: 2, route: '/productos/accesorios' },
	]

	return (
		<nav className={styles.nav}>
			<NavLink to='/' className={styles.logoContainer}>
				<img src={logo} alt="" id="imagen" />
			</NavLink>
			{/* <h1>Reci Importaciones</h1> */}
			<div className={styles.navUl}>
				{
					categories.map((category) => {
						return <NavLink key={category.id} to={category.route}>{category.name}</NavLink>
					})
				}
				<NavLink to="/contacto">Nosotros</NavLink>
			</div>
			<NavLink to="/cart">
				<CartWidget />
			</NavLink>
			{/* <a href="#!" id="carrito"><img src={ShoppingCartIcon} alt="" /></a> */}
		</nav>
	)
}

export default Navbar;