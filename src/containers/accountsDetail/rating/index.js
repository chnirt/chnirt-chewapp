import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Rating from '@material-ui/lab/Rating'
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

function createData(
	time,
	connectionID,
	type,
	owner,
	connectedBy,
	rating,
	comments
) {
	return { time, connectionID, type, owner, connectedBy, rating, comments }
}

const rows = [
	createData('24 Oct 2019 11:00', 1235, 'Offer', 'Sean', 'Peter', 5, 'Good'),
	createData('23 Oct 2019 20:10', 1234, 'Request', 'Don Goh', 'Sean', 4, 'Bad')
]

function index() {
	const classes = useStyles()

	return (
		<Paper className={classes.root}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="center">Connect Date/Time</TableCell>
						<TableCell align="center">Connection ID</TableCell>
						<TableCell align="center">Type</TableCell>
						<TableCell align="center">Owner</TableCell>
						<TableCell align="center">Connected by</TableCell>
						<TableCell align="center">Rating</TableCell>
						<TableCell align="center">Commnents</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, i) => (
						<TableRow key={i}>
							<TableCell component="th" scope="row" align="center">
								{row.time}
							</TableCell>
							<TableCell align="center">{row.connectionID}</TableCell>
							<TableCell align="center">
								<Badge
									badgeContent={row.type}
									color={row.type === 'Request' ? 'default' : 'primary'}
								/>
							</TableCell>
							<TableCell align="center">{row.owner}</TableCell>
							<TableCell align="center">{row.connectedBy}</TableCell>
							<TableCell align="center">
								<Rating name="size-small" value={row.rating} size="small" />
							</TableCell>
							<TableCell align="center">{row.comments}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	)
}

export default index
