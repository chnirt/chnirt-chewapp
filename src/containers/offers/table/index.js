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
							key={row.name}
							onClick={() => handleDetail(row.id)}
							className={classes.tableRow}
						>
							<TableCell align="center" component="th" scope="row">
								{row.offerDate}
							</TableCell>
							<TableCell align="center">{row.name}</TableCell>
							<TableCell align="center">{row.whatIsIt}</TableCell>
							<TableCell align="center">{row.from}</TableCell>
							<TableCell align="center">{row.to}</TableCell>
							<TableCell align="center">{row.payment}</TableCell>
							<TableCell align="center">{row.connections}</TableCell>
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
