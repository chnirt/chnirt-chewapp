import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import Chart from '../../components/chart'
import Deposits from '../../components/deposits'
import Orders from '../../components/orders'

function index(props) {
	const { fixedHeightPaper, container, paper } = props

	return (
		<>
			{/* <Grid container spacing={3}>
				<Grid item xs={12} md={8} lg={9}>
					<Paper className={fixedHeightPaper}>
						<Chart />
					</Paper>
				</Grid>
				<Grid item xs={12} md={4} lg={3}>
					<Paper className={fixedHeightPaper}>
						<Deposits />
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={paper}>
						<Orders />
					</Paper>
				</Grid>
			</Grid> */}
			Dashboard
		</>
	)
}

export default index
