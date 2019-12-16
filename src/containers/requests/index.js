import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Toolbar from './toolbar'
import AccountTable from './table'

import Breadcrumb from '../../components/breadcrumb'

const columns = [
	{ id: 'requestDate', label: 'Request Date / Time', minWidth: 170 },
	{ id: 'name', label: 'Name', minWidth: 100 },
	{
		id: 'whatIsIt',
		label: 'What is it',
		minWidth: 170
	},
	{
		id: 'expiryTime',
		label: 'Expiry Time',
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
	requestDate,
	name,
	whatIsIt,
	expiryTime,
	from,
	to,
	payment,
	connections,
	status
) {
	return {
		requestDate,
		name,
		whatIsIt,
		expiryTime,
		from,
		to,
		payment,
		connections,
		status
	}
}

const rows = [
	createData(
		'24 Oct 2019 9:00',
		'Sean Tsai',
		'3 packs of chicken rice',
		'30min',
		'22 Sin Ming Lane',
		'24 Sin Ming Lane',
		'ChewPay',
		0,
		'Active'
	),
	createData(
		'23 Oct 2019 20:00',
		'Don Goh',
		'Anything',
		'120min',
		'Loyang Point',
		'30 Pasir Ris',
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
				<Breadcrumb>Requests</Breadcrumb>
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
