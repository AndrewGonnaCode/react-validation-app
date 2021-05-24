import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Button from '../components/Button'


const Home = () => {
	const user = useSelector(state => state.reducer.user)
	const history = useHistory()
	const login = () => {
		history.push('/login')
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<h2>Welcome</h2>
			<div>
				{!user && <Button clas='btn btn-primary' text='Войти' clickHandler={login} />}
				{user && <Button clas="btn btn-success" text="Мой профиль" clickHandler={() => history.push('/profile')} />}
			</div>
		</div>
	)
}

export default Home
