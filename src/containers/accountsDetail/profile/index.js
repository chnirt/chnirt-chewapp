import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

import AccountDetails from './detail'
import AccountProfile from './info'

const useStyles = makeStyles(theme => ({
	root: {
		// padding: theme.spacing(4)
	}
}))

function index() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Grid container spacing={4}>
				<Grid item lg={4} md={6} xl={4} xs={12}>
					<AccountProfile />
				</Grid>
				<Grid item lg={8} md={6} xl={8} xs={12}>
					<AccountDetails />
				</Grid>
			</Grid>
		</div>
	)
}

export default index
