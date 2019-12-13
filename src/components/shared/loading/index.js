import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

function index() {
	return (
		<div
			style={{
				display: 'grid',
				placeItems: 'center',
				minHeight: '100vh'
			}}
		>
			<CircularProgress disableShrink />
		</div>
	)
}

export default index
