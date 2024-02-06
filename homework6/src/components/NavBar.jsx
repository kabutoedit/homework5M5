import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { marketAction } from '../store/action.js'

const NavBar = () => {
	const count = useSelector(state => state.marketState.counter)

	
	return (
		<nav>
			<ul>
				<h4>
					<NavLink to={'/productsPage'}>Products</NavLink>
				</h4>
				<h4>
					<NavLink to={'/basketPage'}>Basket</NavLink>
				</h4>
				<p className={'counter'}>{count}</p>
			</ul>
		</nav>
	)
}

export default NavBar
