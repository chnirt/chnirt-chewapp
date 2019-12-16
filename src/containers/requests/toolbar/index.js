import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, withStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputBase from '@material-ui/core/InputBase'

import SearchInput from '../../../components/searchinput'

const BootstrapInput = withStyles(theme => ({
	root: {
		'label + &': {
			marginTop: theme.spacing(3)
		}
	},
	input: {
		borderRadius: 4,
		position: 'relative',
		backgroundColor: theme.palette.background.paper,
		border: '1px solid #ced4da',
		fontSize: 16,
		padding: '10px 26px 10px 12px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(','),
		'&:focus': {
			borderRadius: 4,
			borderColor: '#80bdff',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
		}
	}
}))(InputBase)

const useStyles = makeStyles(theme => ({
	root: {},
	row: {
		height: '42px',
		display: 'flex',
		alignItems: 'center',
		marginTop: theme.spacing(1)
	},
	spacer: {
		flexGrow: 1
	},
	importButton: {
		marginRight: theme.spacing(1)
	},
	exportButton: {
		marginRight: theme.spacing(1)
	},
	form: {
		width: '100%'
	},
	searchInput: {
		padding: '6px'
	}
}))

function index(props) {
	const { className, ...rest } = props

	const classes = useStyles()

	const [status, setStatus] = React.useState(0)
	const handleChange = event => {
		setStatus(event.target.value)
	}

	return (
		<div {...rest} className={clsx(classes.root, className)}>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<SearchInput
						className={classes.searchInput}
						placeholder="Search..."
					/>
				</Grid>
				<Grid item xs={12} md={3}>
					<FormControl className={classes.form}>
						<NativeSelect
							id="demo-customized-select-native"
							value={status}
							onChange={handleChange}
							input={<BootstrapInput />}
						>
							<option value={0}>Active</option>
							<option value={1}>Suspended</option>
							<option value={-1}>Blacklisted</option>
						</NativeSelect>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={3}>
					<Button
						className={classes.importButton}
						fullWidth
						color="primary"
						variant="contained"
						size="large"
					>
						Search
					</Button>
				</Grid>
			</Grid>
		</div>
	)
}

index.propTypes = {
	className: PropTypes.string
}

export default index
