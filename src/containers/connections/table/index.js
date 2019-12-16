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
	},
	tableRow: {
		cursor: 'pointer'
	}
})

function index(props) {
	const classes = useStyles()

	const {
		columns,
		rows,
		rowsPerPage,
		page,
		handleChangePage,
		handleChangeRowsPerPage,
		handleDetail
	} = props

	return (
		<Paper className={classes.root}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						{columns.map(column => (
							<TableCell key={column.id} align="center">
								{column.label}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow
							hover
							key={row.connectionID}
							onClick={() => handleDetail(row.connectionID)}
							className={classes.tableRow}
						>
							<TableCell align="center" component="th" scope="row">
								{row.connectDate}
							</TableCell>
							<TableCell align="center">{row.connectionID}</TableCell>
							<TableCell align="center">{row.type}</TableCell>
							<TableCell align="center">{row.owner}</TableCell>
							<TableCell align="center">{row.connectedBy}</TableCell>
							<TableCell align="center">{row.totalAmountSGD}</TableCell>
							<TableCell align="center">{row.payment}</TableCell>
							<TableCell align="center">{row.whatIsIt}</TableCell>
							<TableCell align="center">{row.status}</TableCell>
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
