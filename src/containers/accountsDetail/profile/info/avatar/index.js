import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import { IconButton } from '@material-ui/core'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

const image = {
	url:
		'https://res.cloudinary.com/chnirt/image/upload/v1573662028/rest/2019-11-13T16:20:22.699Z.png',
	title: 'Camera',
	width: '100%'
}

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		minWidth: 300,
		width: '100%'
	},
	image: {
		position: 'relative',
		height: 200,
		[theme.breakpoints.down('xs')]: {
			width: '100% !important', // Overrides inline-style
			height: 100
		},
		'&:hover, &$focusVisible': {
			zIndex: 1,
			'& $imageBackdrop': {
				opacity: 0.15
			},
			'& $imageMarked': {
				opacity: 0
			},
			'& $imageTitle': {
				border: '4px solid currentColor'
			}
		}
	},
	focusVisible: {},
	imageButton: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.common.white
	},
	imageSrc: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundPosition: 'center 40%'
	},
	imageBackdrop: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.4,
		transition: theme.transitions.create('opacity')
	},
	imageTitle: {
		position: 'relative',
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
			6}px`
	},
	imageMarked: {
		height: 3,
		width: 18,
		backgroundColor: theme.palette.common.white,
		position: 'absolute',
		bottom: -2,
		left: 'calc(50% - 9px)',
		transition: theme.transitions.create('opacity')
	},
	uploadIcon: {
		color: 'white'
	},
	input: {
		display: 'none'
	}
}))

export default function index() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<ButtonBase
				focusRipple
				key={image.title}
				className={classes.image}
				focusVisibleClassName={classes.focusVisible}
				style={{
					width: image.width
				}}
				disableRipple={true}
			>
				<span
					className={classes.imageSrc}
					style={{
						backgroundImage: `url(${image.url})`
					}}
				/>
				<span className={classes.imageBackdrop} />
				<span className={classes.imageButton}>
					<input
						accept="image/*"
						className={classes.input}
						id="icon-button-file"
						type="file"
					/>
					<label htmlFor="icon-button-file">
						<IconButton
							color="default"
							aria-label="upload picture"
							component="span"
							className={classes.uploadIcon}
						>
							<PhotoCamera />
						</IconButton>
					</label>
				</span>
			</ButtonBase>
		</div>
	)
}
