import React from 'react'
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import { menuRoutes } from '../../routes'

export const mainListItems = (
	<div>
		{menuRoutes.map((item, i) => (
			<ListItem key={i} button component={Link} to={item.path}>
				<ListItemIcon>{item.icon}</ListItemIcon>
				<ListItemText primary={item.label} />
			</ListItem>
		))}
	</div>
)
