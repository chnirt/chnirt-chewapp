import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'

import Toolbar from './toolbar'
import AccountTable from './table'

const columns = [
	{ id: 'lastSeen', label: 'Last Open App', minWidth: 170 },
	{ id: 'createdAt', label: 'Registration Date', minWidth: 100 },
	{
		id: 'name',
		label: 'Name',
		minWidth: 170
	},
	{
		id: 'email',
		label: 'Email',
		minWidth: 170
	},
	{
		id: 'mobile',
		label: 'Mobile',
		minWidth: 170
	}
]

function createData(lastSeen, createdAt, name, email, mobile) {
	return { lastSeen, createdAt, name, email, mobile }
}

const rows = [
	createData(
		'24 Oct 2019 18:00',
		'24 Oct 2019 18:00',
		'Sean Tsai',
		'sean@chewapp.co',
		'+65 90995755'
	),
	createData(
		'23 Oct 2019 09:00',
		'23 Oct 2019 09:00',
		'Don Goh',
		'don@chewapp.co',
		'+65 98573728'
	),
	createData(
		'22 Oct 2019 14:00',
		'22 Oct 2019 14:00',
		'Desmond Ser',
		'desmond@chewapp.co',
		'+65 89484658'
	),
	createData(
		'21 Oct 2019 15:00',
		'21 Oct 2019 15:00',
		'Johnson Oei',
		'johnson@chewapp.co',
		'+65 89836478'
	)
]

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(4)
	},
	root2: {
		padding: theme.spacing(3)
	},
	content: {
		marginTop: theme.spacing(2)
	},
	tableWrapper: {
		maxHeight: 440,
		overflow: 'auto'
	}
}))

function index() {
	const classes = useStyles()
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(10)

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(+event.target.value)
		setPage(0)
	}

	return (
		<div className={classes.root}>
			<Paper className={classes.root2}>
				<Toolbar />
				<div className={classes.content}>
					<AccountTable />
				</div>
				{/* <div className={classes.tableWrapper}>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								{columns.map((column, i) => (
									<TableCell
										key={i}
										align={column.align}
										style={{ minWidth: column.minWidth }}
									>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{rows
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, i) => {
									return (
										<TableRow hover role="checkbox" tabIndex={-1} key={i}>
											{columns.map((column, i) => {
												const value = row[column.id]
												return (
													<TableCell key={i} align={column.align}>
														{column.format && typeof value === 'number'
															? column.format(value)
															: value}
													</TableCell>
												)
											})}
										</TableRow>
									)
								})}
						</TableBody>
					</Table>
				</div>
				<TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/> */}
			</Paper>
		</div>
	)
}

export default index
