import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Toolbar from './toolbar'
import AccountTable from './table'

import Breadcrumb from '../../components/breadcrumb'

const columns = [
	{ id: 'offerDate', label: 'Offer Date / Time', minWidth: 170 },
	{ id: 'name', label: 'Name', minWidth: 100 },
	{
		id: 'whatIsIt',
		label: 'What is it',
		minWidth: 170
	},
	{
		id: 'from',
		label: 'From',
		minWidth: 170
	},
	{
		id: 'to',
		label: 'To',
		minWidth: 170
	},
	{
		id: 'payment',
		label: 'Payment',
		minWidth: 170
	},
	{
		id: 'connections',
		label: 'Connections',
		minWidth: 170
	},
	{
		id: 'status',
		label: 'Status',
		minWidth: 170
	}
]

function createData(
	offerDate,
	name,
	whatIsIt,
	from,
	to,
	payment,
	connections,
	status
) {
	return {
		offerDate,
		name,
		whatIsIt,
		from,
		to,
		payment,
		connections,
		status
	}
}

const rows = [
	createData(
		'24 Oct 2019 11:00',
		'Desmond Ser',
		'Katong Laksa',
		'22 Sin Ming Lane		',
		'24 Sin Ming Lane',
		'ChewPay',
		0,
		'Active'
	),
	createData(
		'23 Oct 2019 19:00',
		'Johnson',
		'Tian Tian Chicken Rice',
		'Loyang Point',
		'',
		'Cash',
		2,
		'Expired'
	)
]

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(4),
		minHeight: 'calc(100vh - 168px)'
	},
	breadcrumb: {
		padding: theme.spacing(1)
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
	const [id, setId] = useState(null)
	const [drawer, setDrawer] = useState(false)

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(+event.target.value)
		setPage(0)
	}

	const handleDetail = id => {
		setDrawer(true)
		setId(id)
	}

	const toggleDrawer = open => event => {
		setDrawer(open)
	}
	return (
		<div className={classes.root}>
			<div className={classes.breadcrumb}>
				<Breadcrumb>Request</Breadcrumb>
			</div>

			<Toolbar />
			<div className={classes.content}>
				<AccountTable
					columns={columns}
					rows={rows}
					rowsPerPage={rowsPerPage}
					page={page}
					handleChangePage={handleChangePage}
					handleChangeRowsPerPage={handleChangeRowsPerPage}
					handleDetail={handleDetail}
				/>
			</div>
		</div>
	)
}

export default index
