import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Badge from '@material-ui/core/Badge'

const useStyles = makeStyles({
	root: {
		width: '100%',
		overflowX: 'auto'
	},
	table: {
		minWidth: 650
	}
})

function createData(time, type, location, details, remarks) {
	return { time, type, location, details, remarks }
}

const rows = [
	createData(
		'24 Oct 2019 11:00',
		'Home',
		'22 Sin Ming Lane',
		'#05-71, Midview City',
		'enter by lobby'
	),
	createData(
		'23 Oct 2019 20:10',
		'Office',
		'22 Sin Ming Lane',
		'#05-71, Midview City',
		'enter by lobby'
	),
	createData(
		'23 Oct 2019 20:10',
		'Other',
		'28A Temple Street',
		'058573, Singapore City',
		'enter by lobby'
	)
]

function index() {
	const classes = useStyles()

	return (
		<Paper className={classes.root}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="center">Connect Date/Time</TableCell>
						<TableCell align="center">Type</TableCell>
						<TableCell align="center">Location</TableCell>
						<TableCell align="center">Details</TableCell>
						<TableCell align="center">Remarks</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, i) => (
						<TableRow key={i}>
							<TableCell component="th" scope="row" align="center">
								{row.time}
							</TableCell>
							<TableCell align="center">
								<Badge
									badgeContent={row.type}
									color={row.type === 'Other' ? 'default' : 'primary'}
								/>
							</TableCell>
							<TableCell align="center">{row.location}</TableCell>
							<TableCell align="center">{row.details}</TableCell>
							<TableCell align="center">{row.remarks}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	)
}

export default index
