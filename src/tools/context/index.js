import React, { useState } from 'react'

const CTX = React.createContext()

export { CTX }

export default function Store(props) {
	const [isAuth, setIsAuth] = useState(
		!!window.localStorage.getItem('access-token')
	)

	const authenticate = token => {
		window.localStorage.setItem('access-token', token)
		setIsAuth(true)
	}

	const logout = () => {
		window.localStorage.removeItem('access-token')
		setIsAuth(false)
	}

	return (
		<CTX.Provider value={{ isAuth, authenticate, logout }}>
			{props.children}
		</CTX.Provider>
	)
}
