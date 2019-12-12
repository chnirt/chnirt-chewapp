import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(4)
	}
}))

function index() {
	const classes = useStyles()
	return <div className={classes.root}>Bank</div>
}

export default index
