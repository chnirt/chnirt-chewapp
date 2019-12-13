import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { callApi } from '../../utils/apis'
const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(4),
		minHeight: 'calc(100vh - 168px)'
	}
}))

function index() {
	const classes = useStyles()

	const [data, setData] = useState(null)
	useEffect(() => {
		callApi('get', null, null).then(({ data }) => setData(data))
	}, [])

	return (
		<div className={classes.root}>
			Dashboard
			<br />
			{data && data}
		</div>
	)
}

export default index
