import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Profile = () => {
	const user = useSelector((state) => state.reducer.user)
	console.log('ALLO', user);
	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<h2>Профиль</h2>
			<div class="card" style={{ width: "18rem" }}>
				<div class="card-body">
					<h5 class="card-title">{user.email}</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<NavLink style={{ width: '100%' }} to="/" class="btn btn-primary">На главную</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Profile
