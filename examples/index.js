import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import OrderLink from '../src/OrderLink'

class App extends Component {

	render() {
		return (
			<div>
				<OrderLink

				/>
			</div>
		)
	}
}

App.propTypes = {}
App.defaultProps = {}

render(<App />, document.getElementById('root'))
