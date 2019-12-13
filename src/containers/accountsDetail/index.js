import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(4),
		minHeight: 'calc(100vh - 168px)'
	},
	typo: {
		margin: theme.spacing(1),
		borderLeft: '0.1em solid black',
		paddingLeft: '1em'
	}
}))

function index(props) {
	const classes = useStyles()

	const { match } = props
	const { params } = match
	const { id } = params

	function handleBack() {
		props.history.push('/accounts')
	}
	return (
		<div className={classes.root}>
			<Box display="flex" flexDirection="row">
				<Box>
					<IconButton aria-label="delete" onClick={handleBack}>
						<ArrowBackIcon fontSize="small" />
					</IconButton>
				</Box>
				<Box>
					<Typography variant="h3" className={classes.typo}>
						Accounts - {id && id}
					</Typography>
				</Box>
			</Box>
		</div>
	)
}

export default index
