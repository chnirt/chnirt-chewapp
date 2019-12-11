import React, { useState } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'

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
		width: '100%'
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
		<React.Fragment>
			<Paper className={classes.root}>
				<div className={classes.tableWrapper}>
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
				/>
			</Paper>
		</React.Fragment>
	)
}

export default index

// import React, { forwardRef } from 'react'
// import MaterialTable from 'material-table'
// import AddBox from '@material-ui/icons/AddBox'
// import ArrowUpward from '@material-ui/icons/ArrowUpward'
// import Check from '@material-ui/icons/Check'
// import ChevronLeft from '@material-ui/icons/ChevronLeft'
// import ChevronRight from '@material-ui/icons/ChevronRight'
// import Clear from '@material-ui/icons/Clear'
// import DeleteOutline from '@material-ui/icons/DeleteOutline'
// import Edit from '@material-ui/icons/Edit'
// import FilterList from '@material-ui/icons/FilterList'
// import FirstPage from '@material-ui/icons/FirstPage'
// import LastPage from '@material-ui/icons/LastPage'
// import Remove from '@material-ui/icons/Remove'
// import SaveAlt from '@material-ui/icons/SaveAlt'
// import Search from '@material-ui/icons/Search'
// import ViewColumn from '@material-ui/icons/ViewColumn'

// const tableIcons = {
// 	Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
// 	Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
// 	Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
// 	Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
// 	DetailPanel: forwardRef((props, ref) => (
// 		<ChevronRight {...props} ref={ref} />
// 	)),
// 	Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
// 	Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
// 	Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
// 	FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
// 	LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
// 	NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
// 	PreviousPage: forwardRef((props, ref) => (
// 		<ChevronLeft {...props} ref={ref} />
// 	)),
// 	ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
// 	Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
// 	SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
// 	ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
// 	ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
// }

// export default function MaterialTableDemo() {
// 	const [state, setState] = React.useState({
// 		columns: [
// 			{ title: 'Name', field: 'name' },
// 			{ title: 'Surname', field: 'surname' },
// 			{ title: 'Birth Year', field: 'birthYear', type: 'numeric' },
// 			{
// 				title: 'Birth Place',
// 				field: 'birthCity',
// 				lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }
// 			}
// 		],
// 		data: [
// 			{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
// 			{
// 				name: 'Zerya Betül',
// 				surname: 'Baran',
// 				birthYear: 2017,
// 				birthCity: 34
// 			}
// 		]
// 	})

// 	return (
// 		// <div>Account</div>
// 		<MaterialTable
// 			// icons={tableIcons}
// 			title="Editable Example"
// 			columns={state.columns}
// 			data={state.data}
// 			editable={{
// 				onRowAdd: newData =>
// 					new Promise(resolve => {
// 						setTimeout(() => {
// 							resolve()
// 							setState(prevState => {
// 								const data = [...prevState.data]
// 								data.push(newData)
// 								return { ...prevState, data }
// 							})
// 						}, 600)
// 					}),
// 				onRowUpdate: (newData, oldData) =>
// 					new Promise(resolve => {
// 						setTimeout(() => {
// 							resolve()
// 							if (oldData) {
// 								setState(prevState => {
// 									const data = [...prevState.data]
// 									data[data.indexOf(oldData)] = newData
// 									return { ...prevState, data }
// 								})
// 							}
// 						}, 600)
// 					}),
// 				onRowDelete: oldData =>
// 					new Promise(resolve => {
// 						setTimeout(() => {
// 							resolve()
// 							setState(prevState => {
// 								const data = [...prevState.data]
// 								data.splice(data.indexOf(oldData), 1)
// 								return { ...prevState, data }
// 							})
// 						}, 600)
// 					})
// 			}}
// 		/>
// 	)
// }
