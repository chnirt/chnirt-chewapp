import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import {
	Card,
	CardActions,
	CardContent,
	Avatar,
	Typography,
	Divider,
	Button,
	LinearProgress
} from '@material-ui/core'
import AvatarBase from './avatar'

const useStyles = makeStyles(theme => ({
	root: {},
	details: {
		display: 'flex'
	},
	progress: {
		marginTop: theme.spacing(2)
	},
	uploadButton: {
		marginRight: theme.spacing(2)
	}
}))

const index = props => {
	const { className, ...rest } = props

	const classes = useStyles()

	const user = {
		name: 'Shen Zhi',
		city: 'Los Angeles',
		country: 'USA',
		timezone: 'GTM-7',
		avatar:
			'https://res.cloudinary.com/chnirt/image/upload/v1573662028/rest/2019-11-13T16:20:22.699Z.png'
	}

	return (
		<Card {...rest} className={clsx(classes.root, className)}>
			<AvatarBase />
			<CardContent>
				<div className={classes.details}>
					<div>
						<Typography gutterBottom variant="h2">
							John Doe
						</Typography>
						<Typography
							className={classes.locationText}
							color="textSecondary"
							variant="body1"
						>
							{user.city}, {user.country}
						</Typography>
						<Typography
							className={classes.dateText}
							color="textSecondary"
							variant="body1"
						>
							{user.timezone}
						</Typography>
					</div>
				</div>
				<div className={classes.progress}>
					<Typography variant="body1">Profile Completeness: 70%</Typography>
					<LinearProgress value={70} variant="determinate" />
				</div>
			</CardContent>
			<Divider />
			<CardActions>
				<Button className={classes.uploadButton} color="primary" variant="text">
					Upload picture
				</Button>
				<Button variant="text">Remove picture</Button>
			</CardActions>
		</Card>
	)
}

index.propTypes = {
	className: PropTypes.string
}

export default index
