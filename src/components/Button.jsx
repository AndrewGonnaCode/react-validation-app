import React from 'react'

const Button = ({ text, clas, clickHandler }) => {
	return (
		<button style={{ marginRight: '10px', marginLeft: 'auto' }} onClick={() => clickHandler()} className={clas}>
			{text}
		</button>
	)
}

export default Button
