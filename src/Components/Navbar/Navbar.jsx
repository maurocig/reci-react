import { React, useContext, useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
// import menuIcon from '../../assets/menu-icon/icons8-menu-24.svg';

import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import logo from '../../assets/reci.png';
import { contexto } from '../../Context/CartContext';
import { CartWidget } from "../CartWidget/CartWidget";
import style from './Navbar.module.css';

export default function Navbar() {
	const { cantidadItems } = useContext(contexto);

	const [isNavExpanded, setIsNavExpanded] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {

		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		}
		window.addEventListener('resize', changeWidth)

	}, []);

	const categories = [
		{ name: 'equipos', id: 0, route: '/productos/equipos' },
		{ name: 'carrocerias', id: 1, route: '/productos/carrocerias' },
		{ name: 'accesorios', id: 2, route: '/productos/accesorios' },
	]

	function toggleNav() {
		setIsNavExpanded(!isNavExpanded);
	}

	return (
		<nav className={style.nav}>
			<div className={style.logoContainer}>
				<img src={logo} alt="" id="imagen" />
			</div>
			<div className={style.navRight}>

				{
					(isNavExpanded || screenWidth > 800) && (
						<ul className={style.primaryNavigation} id="primary-navigation">
							{categories.map((category) => {
								return (
									<li>
										<NavLink onClick={toggleNav} className={style.navLink} key={category.id} to={category.route}>{category.name}</NavLink>
									</li>
								);
							})}
							<li>
								<NavLink onClick={toggleNav} className={style.navLink} to="/contacto">Nosotros</NavLink>
							</li>
						</ul>
					)
				}


				{
					cantidadItems > 0
					&& (
						<NavLink className={style.cartWidgetLink} to="/cart">
							<CartWidget />
						</NavLink>
					)
				}
				<button className={style.mobileNavToggle} onClick={toggleNav} aria-controls="primary-navigation" aria-expanded="false">
					{
						isNavExpanded ? <MdClose className={style.navCloseIcon} />
							: <FiMenu className={style.navToggleIcon} />
					}
				</button>
			</div>
		</nav >
	)
}
