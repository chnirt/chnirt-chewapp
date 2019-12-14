import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import SwipeableViews from 'react-swipeable-views'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles, useTheme } from '@material-ui/styles'

import Profile from './profile'
import SavedAddress from './savedaddress'
import Rating from './rating'

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	)
}

// TabPanel.propTypes = {
// 	children: PropTypes.node,
// 	index: PropTypes.any.isRequired,
// 	value: PropTypes.any.isRequired
// }

function a11yProps(index) {
	return {
		// id: `scrollable-auto-tab-${index}`,
		// 'aria-controls': `scrollable-auto-tabpanel-${index}`
		id: `scrollable-prevent-tab-${index}`,
		'aria-controls': `scrollable-prevent-tabpanel-${index}`
	}
}

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(4),
		minHeight: 'calc(100vh - 168px)'
	},
	typo: {
		margin: theme.spacing(1),
		borderLeft: '0.1em solid black',
		paddingLeft: '1em'
	},
	tabPanel: {
		'& .MuiBox-root': {
			padding: '24px 1px'
		}
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

	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	const theme = useTheme()

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

			<Paper square>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons="off"
					indicatorColor="primary"
					textColor="primary"
					aria-label="scrollable force tabs example"
				>
					<Tab disableRipple={true} label="Profile" {...a11yProps(0)} />
					<Tab disableRipple={true} label="Saved Address" {...a11yProps(1)} />
					<Tab disableRipple={true} label="Rating" {...a11yProps(2)} />
				</Tabs>
			</Paper>
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChange}
			>
				<TabPanel
					value={value}
					index={0}
					dir={theme.direction}
					className={classes.tabPanel}
				>
					<Profile />
				</TabPanel>
				<TabPanel
					value={value}
					index={1}
					dir={theme.direction}
					className={classes.tabPanel}
				>
					<SavedAddress />
				</TabPanel>
				<TabPanel
					value={value}
					index={2}
					dir={theme.direction}
					className={classes.tabPanel}
				>
					<Rating />
				</TabPanel>
			</SwipeableViews>
		</div>
	)
}

export default index
