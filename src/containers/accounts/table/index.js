import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import TablePagination from '@material-ui/core/TablePagination'

const useStyles = makeStyles({
	root: {
		width: '100%',
		overflowX: 'auto'
	},
	table: {
		minWidth: 650
	}
})

function index(props) {
	const classes = useStyles()

	const {
		rows,
		rowsPerPage,
		page,
		handleChangePage,
		handleChangeRowsPerPage
	} = props

	return (
		<Paper className={classes.root}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="center">Last Open App</TableCell>
						<TableCell align="center">Registration Date</TableCell>
						<TableCell align="center">Name</TableCell>
						<TableCell align="center">Email</TableCell>
						<TableCell align="center">Mobile</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.name}>
							<TableCell align="center" component="th" scope="row">
								{row.lastSeen}
							</TableCell>
							<TableCell align="center">{row.createdAt}</TableCell>
							<TableCell align="center">{row.name}</TableCell>
							<TableCell align="center">{row.email}</TableCell>
							<TableCell>{row.mobile}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</Paper>
	)
}

index.propTypes = {
	className: PropTypes.string,
	rows: PropTypes.array.isRequired
}

export default index
