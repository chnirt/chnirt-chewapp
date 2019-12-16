import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import SwipeableViews from 'react-swipeable-views'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles, useTheme } from '@material-ui/styles'
import CloseIcon from '@material-ui/icons/Close'

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
		id: `scrollable-auto-tab-${index}`,
		'aria-controls': `scrollable-auto-tabpanel-${index}`
	}
}

const useStyles = makeStyles(theme => ({
	drawer: {
		[theme.breakpoints.up('xs')]: {
			width: '100vw'
		},
		[theme.breakpoints.up('sm')]: {
			width: '100vw'
		},
		[theme.breakpoints.up('md')]: {
			width: '800px'
		}
	},
	root: {
		padding: theme.spacing(4),
		minHeight: 'calc(100vh - 44px)'
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
	},
	backButton: {
		marginRight: theme.spacing(2)
	}
}))

function index(props) {
	const classes = useStyles()

	const { id, toggleDrawer } = props

	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	const theme = useTheme()

	return (
		<div className={classes.drawer}>
			<IconButton onClick={toggleDrawer(false)} color="inherit">
				<CloseIcon fontSize="small" />
			</IconButton>

			<div className={classes.root}>
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
						<Tab label="Profile" {...a11yProps(0)} />
						<Tab label="Saved Address" {...a11yProps(1)} />
						<Tab label="Rating" {...a11yProps(2)} />
					</Tabs>
				</Paper>

				<SwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={value}
					onChangeIndex={handleChange}
					disabled
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
		</div>
	)
}

export default index
