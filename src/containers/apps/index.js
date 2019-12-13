import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Loading from '../../components/shared/loading'
import './styles.css'

export default function Root(props) {
	const { routes } = props

	return (
		<Route
			render={({ location }) => {
				const { pathname, key } = location
				return (
					<>
						<Suspense fallback={<Loading />}>
							<TransitionGroup>
								<CSSTransition key={key} timeout={450} classNames="fade">
									<Switch location={location}>
										{routes &&
											routes.map(route => (
												<Route
													key={route.label}
													{...route}
													component={props => {
														const LazyComponent = React.lazy(() =>
															import(`../${route.component}`)
														)
														return (
															<LazyComponent
																{...props}
																{...route}
																routes={route.routes}
															/>
														)
													}}
												/>
											))}
										<Redirect to="/dashboard" />
									</Switch>
								</CSSTransition>
							</TransitionGroup>
						</Suspense>
					</>
				)
			}}
		/>
	)
}
