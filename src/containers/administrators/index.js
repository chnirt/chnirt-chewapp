import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Breadcrumb from '../../components/breadcrumb'

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(4),
		minHeight: 'calc(100vh - 168px)'
	},
	breadcrumb: {
		padding: theme.spacing(1)
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
			<div className={classes.breadcrumb}>
				<Breadcrumb>Administrators</Breadcrumb>
			</div>

			<iframe
				className={classes.iframe}
				src="https://material.io/tools/icons/?icon=accessibility&style=outline"
				title="Material Design icons"
			/>
		</div>
	)
}

export default index
