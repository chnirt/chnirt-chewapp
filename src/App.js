import React from 'react'

import Context from './tools/context'
import Root from './containers'

class App extends React.PureComponent {
	render() {
		return (
			<div>
				<Context>
					<Root />
				</Context>
			</div>
		)
	}
}

export default App
