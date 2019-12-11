import React from 'react'
import { ThemeProvider } from '@material-ui/styles'

import Context from './tools/context'
import Root from './containers'
import theme from './theme'

class App extends React.PureComponent {
	render() {
		return (
			<div>
				<ThemeProvider theme={theme}>
					<Context>
						<Root />
					</Context>
				</ThemeProvider>
			</div>
		)
	}
}

export default App
