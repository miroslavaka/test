import React from 'react'
import { NavLink } from 'react-router-dom'

//styles
import './TheNavigation.scss'

interface Props {}

//component
const TheNavigation: React.FC<Props> = () => {
	return (
		<div>
			<nav className="navigation">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/tunes">Tunes</NavLink>
				<NavLink to="/about">About</NavLink>
			</nav>
		</div>
	)
}
export default TheNavigation
