import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Avatar, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		minHeight: 'fit-content'
	},
	avatar: {
		width: 60,
		height: 60
	},
	name: {
		marginTop: theme.spacing(1)
	}
}))

const Profile = props => {
	const { className, onClose, ...rest } = props

	const classes = useStyles()

	const user = {
		name: 'Chnirt',
		avatar:
			'https://res.cloudinary.com/chnirt/image/upload/v1573662028/rest/2019-11-13T16:20:22.699Z.png',
		bio: 'Brain Leader'
	}

	return (
		<div {...rest} className={clsx(classes.root, className)}>
			<Avatar
				alt="Person"
				className={classes.avatar}
				component={RouterLink}
				src={user.avatar}
				to="/profile"
				onClick={onClose}
			/>
			<Typography className={classes.name} variant="h4">
				{user.name}
			</Typography>
			<Typography variant="body2">{user.bio}</Typography>
		</div>
	)
}

Profile.propTypes = {
	className: PropTypes.string
}

export default Profile
