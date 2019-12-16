import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Toolbar from './toolbar'
import AccountTable from './table'

import Breadcrumb from '../../components/breadcrumb'

const columns = [
	{ id: 'connectDate', label: 'Connect Date / Time', minWidth: 170 },
	{ id: 'connectionID', label: 'Connection ID', minWidth: 100 },
	{
		id: 'type',
		label: 'Type',
		minWidth: 170
	},
	{
		id: 'owner',
		label: 'Owner',
		minWidth: 170
	},
	{
		id: 'connectedBy',
		label: 'Connected by',
		minWidth: 170
	},
	{
		id: 'totalAmountSGD',
		label: 'Total Amount SGD',
		minWidth: 170
	},
	{
		id: 'payment',
		label: 'Payment',
		minWidth: 170
	},
	{
		id: 'whatIsIt',
		label: 'What is it',
		minWidth: 170
	},
	{
		id: 'status',
		label: 'Status',
		minWidth: 170
	}
]

function createData(
	connectDate,
	connectionID,
	type,
	owner,
	connectedBy,
	totalAmountSGD,
	payment,
	whatIsIt,
	status
) {
	return {
		connectDate,
		connectionID,
		type,
		owner,
		connectedBy,
		totalAmountSGD,
		payment,
		whatIsIt,
		status
	}
}

const rows = [
	createData(
		'24 Oct 2019 11:00',
		1235,
		'Offer',
		'Desmond Ser',
		'Sean',
		'11.30',
		'ChewPay',
		'Katong Laksa',
		'Accepted'
	),
	createData(
		'23 Oct 2019 20:10',
		1234,
		'Request',
		'Don Goh',
		'Sam',
		'12.00',
		'Cash',
		'Anything',
		'Completed'
	),
	createData(
		'23 Oct 2019 20:05',
		1233,
		'Request',
		'Don Goh',
		'John',
		'13.00',
		'Cash',
		'Anything',
		'Declined'
	),
	createData(
		'23 Oct 2019 19:05',
		1232,
		'Offer',
		'Johnson',
		'Lynn',
		'11.50',
		'Cash',
		'Tian Tian Chicken Rice',
		'Declined'
	),
	createData(
		'23 Oct 2019 19:05',
		12331,
		'Offer',
		'Johnson',
		'Grace',
		'12.00',
		'Cash',
		'Tian Tian Chicken Rice',
		'Completed'
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
				<Breadcrumb>Connections</Breadcrumb>
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
