import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/actions'
import Button from './Button'

const Navbar = () => {

	const user = useSelector(state => state.reducer.user)
	const dispatch = useDispatch()

	const loguserout = () => {
		dispatch(logout())
	}

	return (
		<div className="container" >
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
				<div className="container-fluid">
					<a style={{ color: 'white' }} className="navbar-brand" href="#">App</a>
					<div>
						{user && <Button clickHandler={loguserout} clas="btn btn-danger" text="Выйти" />}
					</div>

				</div>
			</nav>
		</div>
	)
}

export default Navbar
