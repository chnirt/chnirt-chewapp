import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(4),
		minHeight: 'calc(100vh - 168px)'
	},
	iframe: {
		width: '100%',
		minHeight: 640,
		border: 0
	}
}))

function index() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			Administrators
			<iframe
				className={classes.iframe}
				src="https://material.io/tools/icons/?icon=accessibility&style=outline"
				title="Material Design icons"
			/>
		</div>
	)
}

export default index
