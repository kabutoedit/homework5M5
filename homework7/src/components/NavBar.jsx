import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {

	return (
		<nav>
			<ul>
				<NavLink to={'/CreatePostPage'}>Create post</NavLink>
				<NavLink to={'/PostPage'}>Posts</NavLink>
			</ul>
		</nav>
	)
}
