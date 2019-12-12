import React, { useContext } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { CTX } from '../../tools/context'
import Logo from '../../assets/images/logo.png'

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			{/* <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "} */}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
		'& .MuiAvatar-img': {
			backgroundColor: 'transparent'
		}
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundColor: theme.palette.grey[50],
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1)
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}))

function index(props) {
	const authContext = useContext(CTX)
	const { authenticate } = authContext

	const classes = useStyles()

	function onLogin(email, password) {
		const accessToken = email + password
		authenticate(accessToken)
	}

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar variant="square" className={classes.avatar} src={Logo} />
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>

					<Formik
						initialValues={{
							email: window.localStorage.getItem('email') || '',
							password: '',
							remember: !!window.localStorage.getItem('email') || false
						}}
						validationSchema={Yup.object().shape({
							email: Yup.string()
								.email('Email is invalid')
								.required('Email is required'),
							password: Yup.string()
								.min(6, 'Password must be at least 6 characters')
								.required('Password is required')
						})}
						onSubmit={fields => {
							const { email, password, remember } = fields
							if (remember === true) {
								window.localStorage.setItem('email', email)
							} else {
								window.localStorage.removeItem('email')
							}
							onLogin(email, password)
						}}
						render={({ errors, status, touched }) => (
							<Form className={classes.form} noValidate>
								<Field name="email" type="text">
									{({ field, form, meta }) => (
										<TextField
											variant="outlined"
											margin="normal"
											required
											fullWidth
											name="email"
											autoComplete="email"
											autoFocus
											{...field}
											error={meta.touched && meta.error ? true : false}
											label="Email Address"
											id={
												meta.touched && meta.error
													? 'standard-error-helper-text'
													: 'email'
											}
											helperText={meta.touched && meta.error}
										/>
									)}
								</Field>
								<Field name="password" type="password">
									{({ field, form, meta }) => (
										<TextField
											variant="outlined"
											margin="normal"
											required
											fullWidth
											name="password"
											type="password"
											autoComplete="current-password"
											{...field}
											error={meta.touched && meta.error ? true : false}
											label="Password"
											id={
												meta.touched && meta.error
													? 'standard-error-helper-text'
													: 'password'
											}
											helperText={meta.touched && meta.error}
										/>
									)}
								</Field>
								<Field name="remember">
									{({ field, form }) => (
										<FormControlLabel
											control={
												<Checkbox
													value="remember"
													color="primary"
													id="remember"
													checked={field.value}
													{...field}
												/>
											}
											label="Remember me"
										/>
									)}
								</Field>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
								>
									Sign In
								</Button>
								<Grid container>
									<Grid item xs>
										<Link href="#" variant="body2">
											Forgot password?
										</Link>
									</Grid>
									<Grid item>
										<Link href="#" variant="body2">
											{"Don't have an account? Sign Up"}
										</Link>
									</Grid>
								</Grid>
								<Box mt={5}>
									<Copyright />
								</Box>
							</Form>
						)}
					/>
				</div>
			</Grid>
		</Grid>
	)
}

export default index
