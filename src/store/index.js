
const initialState = {
	isAuth: false,
	user: null,
}

export default function (state = initialState, action) {
	switch (action.type) {
		case 'LOGOUT':
			return {
				...state,
				isAuth: false,
				user: null
			}
		case 'LOGIN':
			return {
				...state,
				isAuth: true,
				user: action.payload
			}
		default: return state
	}
}