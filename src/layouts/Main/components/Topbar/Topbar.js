import React, { useState, useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'

import { CTX } from '../../../../tools/context'
import WhiteLongLogo from '../../../../assets/images/whitelonglogo.png'

const useStyles = makeStyles(theme => ({
	root: {
		boxShadow: 'none'
	},
	image: { height: 36, width: 170 },
	flexGrow: {
		flexGrow: 1
	},
	signOutButton: {
		marginLeft: theme.spacing(1)
	}
}))

const Topbar = props => {
	const { className, onSidebarOpen, ...rest } = props

	const classes = useStyles()

	const [notifications] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

	const authContext = useContext(CTX)

	const { logout } = authContext

	const onLogout = () => {
		logout()
	}

	return (
		<AppBar {...rest} className={clsx(classes.root, className)}>
			<Toolbar>
				<Hidden mdDown>
					<RouterLink to="/">
						<img className={classes.image} alt="Logo" src={WhiteLongLogo} />
					</RouterLink>
				</Hidden>
				<Hidden lgUp>
					<IconButton color="inherit" onClick={onSidebarOpen}>
						<MenuIcon />
					</IconButton>
				</Hidden>
				<div className={classes.flexGrow} />
				<IconButton color="inherit">
					<Badge badgeContent={notifications.length} color="secondary">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<IconButton
					className={classes.signOutButton}
					color="inherit"
					onClick={onLogout}
				>
					<InputIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}

Topbar.propTypes = {
	className: PropTypes.string,
	onSidebarOpen: PropTypes.func
}

export default Topbar
