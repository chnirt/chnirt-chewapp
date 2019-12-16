import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

import Budget from './budget'
import TotalUsers from './totalUsers'
import TasksProgress from './tasksProgress'
import TotalProfit from './totalProfit'
import LatestSales from './latestSales'
import UsersByDevice from './usersByDevice'

import Breadcrumb from '../../components/breadcrumb'

// import {
// 	LatestSales,
// 	UsersByDevice,
// 	LatestProducts,
// 	LatestOrders
// } from './components'

import { callApi } from '../../utils/apis'

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(4),
		minHeight: 'calc(100vh - 168px)'
	},
	breadcrumb: {
		padding: theme.spacing(1)
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
			<div className={classes.breadcrumb}>
				<Breadcrumb />
			</div>

			<Grid container spacing={4}>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<Budget />
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<TotalUsers />
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<TasksProgress />
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<TotalProfit />
				</Grid>
				<Grid item lg={8} md={12} xl={9} xs={12}>
					<LatestSales />
				</Grid>
				<Grid item lg={4} md={6} xl={3} xs={12}>
					<UsersByDevice />
				</Grid>
				<Grid item lg={4} md={6} xl={3} xs={12}>
					{/* <LatestProducts /> */}
				</Grid>
				<Grid item lg={8} md={12} xl={9} xs={12}>
					{/* <LatestOrders /> */}
				</Grid>
			</Grid>
		</div>
	)
}

export default index
