import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import logo from '../logo.svg'
const PageShell = Page => {
	return props => (
		<div className="page">
			<ReactCSSTransitionGroup
				transitionAppear={true}
				transitionAppearTimeout={600}
				transitionEnterTimeout={600}
				transitionLeaveTimeout={200}
				transitionName={props.match.path === '/thanks' ? 'SlideIn' : 'SlideOut'}
			>
				<img src={logo} alt="" />
				<Page {...props} />
			</ReactCSSTransitionGroup>
		</div>
	)
}
export default PageShell
