import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { login } from '../store/actions'
import { useForm } from "react-hook-form";

const Login = () => {
	const history = useHistory()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordError, setPasswordError] = useState(null)
	const dispatch = useDispatch()
	const { register, handleSubmit, formState: { errors } } = useForm();
	;

	const lengthValidator = /^(?=.{8,}$)/
	const oneNumberValidator = /^(?=.*[0-9])/
	const oneUpperCaseValidator = /^(?=.*[A-Z])/
	const oneSymbolValidator = /^(?=.*\W)/


	const validatePssword = () => {
		let error = ""
		const value = password
		if (!oneUpperCaseValidator.test(value)) {
			error = "Пароль должен содержать хотя бы одну заглавную букву"
		}
		if (!oneNumberValidator.test(value)) {
			error = 'Пароль должен содержать минимум 1 цифру'
		}
		if (!oneSymbolValidator.test(value)) {
			error = "Пароль должен содержать минимум один спецсимвол"
		}
		if (!lengthValidator.test(value)) {
			error = "Пароль должен содержать минимум 8 символов"
		}
		setPasswordError(error)
		return error === ""
	}

	const onSubmit = (data) => {
		const user = {
			email: data?.email,
			password: data?.password
		}
		if (data && !passwordError) {
			dispatch(login(user))
			history.push('/profile')
		} else {
			return
		}
	}

	useEffect(() => {
		validatePssword()
	}, [password])
	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '500px', margin: "0 auto" }}>
			<h2>Авторизация</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
					<input
						style={{ marginBottom: '10px' }}
						{...register("email", { required: 'Логин не может быть пустым' })}
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						autoComplete="off"
					/>
					{errors.email && <div className="alert alert-danger" role="alert">{errors.email.message}</div>}
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
					<input
						style={{ marginBottom: '10px' }}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
					{passwordError && <div style={{ width: '400px' }} className="alert alert-danger" role="alert">{passwordError}</div>}
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<button onClick={() => onSubmit()} style={{ width: '100%', marginBottom: '10px' }} type="submit" className="btn btn-primary">Войти</button>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<button onClick={() => history.push('/')} style={{ width: '100%' }} type="submit" className="btn btn-dark">На главную</button>
				</div>
			</form>
		</div>
	)
}

export default Login
