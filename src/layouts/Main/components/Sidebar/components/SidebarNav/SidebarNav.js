/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef, useState } from 'react'
import { NavLink as RouterLink, Link } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { List, ListItem, Button, colors } from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles(theme => ({
	root: {},
	item: {
		display: 'flex',
		paddingTop: 0,
		paddingBottom: 0
	},
	button: {
		color: colors.blueGrey[800],
		padding: '10px 8px',
		justifyContent: 'flex-start',
		textTransform: 'none',
		letterSpacing: 0,
		width: '100%',
		fontWeight: theme.typography.fontWeightMedium
	},
	icon: {
		color: theme.palette.icon,
		width: 24,
		height: 24,
		display: 'flex',
		alignItems: 'center',
		marginRight: theme.spacing(1)
	},
	active: {
		color: theme.palette.primary.main,
		fontWeight: theme.typography.fontWeightMedium,
		'& $icon': {
			color: theme.palette.primary.main
		}
	}
}))

const CustomRouterLink = forwardRef((props, ref) => (
	<div ref={ref} style={{ flexGrow: 1 }}>
		<RouterLink {...props} />
	</div>
))

const SidebarNav = props => {
	const { pages, className, onClose, ...rest } = props

	const classes = useStyles()

	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleClick = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<div>
			<List {...rest} className={clsx(classes.root, className)}>
				{pages.map(page => {
					if (page.pages && page.pages.length > 0) {
						return (
							<ListItem
								className={classes.item}
								disableGutters
								key={page.title}
							>
								<Button
									// activeClassName={classes.active}
									className={classes.button}
									// component={CustomRouterLink}
									// to={page.href}
									onClick={handleClick}
								>
									<div className={classes.icon}>{page.icon}</div>
									{page.title}
								</Button>
								<Menu
									id="simple-menu"
									anchorEl={anchorEl}
									keepMounted
									open={Boolean(anchorEl)}
									onClose={handleClose}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right'
									}}
									transformOrigin={{
										vertical: 'top',
										horizontal: 'left'
									}}
								>
									{page.pages.map(page => (
										<MenuItem
											key={page.title}
											component={Link}
											to={page.href}
											onClick={() => {
												handleClose()
												onClose()
											}}
											// onClick={onClose}
										>
											{page.title}
										</MenuItem>
									))}
								</Menu>
							</ListItem>
						)
					}
					return (
						<ListItem className={classes.item} disableGutters key={page.title}>
							<Button
								activeClassName={classes.active}
								className={classes.button}
								component={CustomRouterLink}
								to={page.href}
								onClick={onClose}
							>
								<div className={classes.icon}>{page.icon}</div>
								{page.title}
							</Button>
						</ListItem>
					)
				})}
			</List>
		</div>
	)
}

SidebarNav.propTypes = {
	className: PropTypes.string,
	pages: PropTypes.array.isRequired
}

export default SidebarNav
