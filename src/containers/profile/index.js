import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(4),
		minHeight: 'calc(100vh - 168px)'
	}
}))

function index() {
	const classes = useStyles()
	return <div className={classes.root}>Profile</div>
}

export default index
