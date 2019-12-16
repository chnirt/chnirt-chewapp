import React from 'react'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
// import Link from '@material-ui/core/Link'
import { Link } from 'react-router-dom'

export default function index(props) {
	const { children } = props

	function handleClick() {
		props.history.push('/dashboard')
		console.info('You clicked a breadcrumb.')
	}

	return (
		<Breadcrumbs aria-label="breadcrumb">
			<Link
				to="/dashboard"
				style={{
					color: 'inherit',
					textDecoration: 'none'
				}}
			>
				Dashboard
			</Link>
			{children && <Typography color="textPrimary">{children}</Typography>}
		</Breadcrumbs>
	)
}
