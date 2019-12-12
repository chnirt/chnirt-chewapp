import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

function index() {
	return (
		<div
			style={{
				textAlign: 'center',
				borderRadius: '4px',
				marginBottom: '20px',
				padding: '30px 50px',
				margin: '20px 0',
				backgroundColor: 'transparent'
			}}
		>
			<CircularProgress disableShrink />
		</div>
	)
}

export default index
