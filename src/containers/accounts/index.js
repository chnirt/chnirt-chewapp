import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Toolbar from './toolbar'
import AccountTable from './table'
import Box from '@material-ui/core/Box'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Drawer from '@material-ui/core/Drawer'
import AccountsDetail from '../accountsDetail'
import Breadcrumb from '../../components/breadcrumb'

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

function createData(id, lastSeen, createdAt, name, email, mobile) {
	return { id, lastSeen, createdAt, name, email, mobile }
}

const rows = [
	createData(
		'1',
		'24 Oct 2019 18:00',
		'24 Oct 2019 18:00',
		'Sean Tsai',
		'sean@chewapp.co',
		'+65 90995755'
	),
	createData(
		'2',
		'23 Oct 2019 09:00',
		'23 Oct 2019 09:00',
		'Don Goh',
		'don@chewapp.co',
		'+65 98573728'
	),
	createData(
		'3',
		'22 Oct 2019 14:00',
		'22 Oct 2019 14:00',
		'Desmond Ser',
		'desmond@chewapp.co',
		'+65 89484658'
	),
	createData(
		'4',
		'21 Oct 2019 15:00',
		'21 Oct 2019 15:00',
		'Johnson Oei',
		'johnson@chewapp.co',
		'+65 89836478'
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

function index(props) {
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
				<Breadcrumb>Accounts</Breadcrumb>
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

			<Drawer anchor="right" open={drawer} onClose={toggleDrawer(false)}>
				<AccountsDetail id={id} toggleDrawer={toggleDrawer} />
			</Drawer>
		</div>
	)
}

export default index
