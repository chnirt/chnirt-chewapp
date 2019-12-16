import React, { useContext, Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { CTX } from '../tools/context'

import Loading from '../components/loading'
import Layout from '../layouts'
import { routes } from '../routes'

function index(props) {
	const authContext = useContext(CTX)
	const { isAuth } = authContext

	return (
		<BrowserRouter>
			<Switch>
				{routes &&
					routes.map(item =>
						item.private ? (
							<Route
								key={item.label}
								{...item}
								component={props => {
									const LazyComponent = lazy(() =>
										import(`./${item.component}`)
									)
									return isAuth ? (
										<Layout>
											<Suspense fallback={<Loading />}>
												<LazyComponent {...props} {...item} />
											</Suspense>
										</Layout>
									) : (
										<Redirect to="/login" />
									)
								}}
							/>
						) : (
							<Route
								key={item.label}
								{...item}
								component={props => {
									const LazyComponent = lazy(() =>
										import(`./${item.component}`)
									)
									return !isAuth ? (
										<Suspense fallback={<Loading />}>
											<LazyComponent {...props} {...item} />
										</Suspense>
									) : (
										<Redirect to="/dashboard" />
									)
								}}
							/>
						)
					)}
			</Switch>
		</BrowserRouter>
	)
}

export default index
