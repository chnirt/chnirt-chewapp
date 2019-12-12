import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(4)
	}
}))

function index() {
	const classes = useStyles()
	return <div className={classes.root}>Referral Setting</div>
}

export default index
