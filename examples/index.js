import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import Box from '../src/Input'

class App extends Component {

	render() {
		return (
			<div>
				<Box
					onChange={() => console.log('onChange')}
					value="sdf"
				/>
			</div>
		)
	}
}

App.propTypes = {}
App.defaultProps = {}

render(<App />, document.getElementById('root'))
