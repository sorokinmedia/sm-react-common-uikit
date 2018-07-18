import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class OrderLink extends Component {

	constructor(props) {
		super(props)

		this.state = {
			order: null
		}
	}

	handleClick = (ev) => {
		ev.preventDefault()

		const { order } = this.state
		const newOrder = order
			? order === 'SORT_ASC'
				? 'SORT_DESC'
				: 'SORT_ASC'
			: 'SORT_DESC'

		this.setState({ order: newOrder })
		this.props.onClick(newOrder)
	}

	render() {
		const { children, showOrder } = this.props
		const { order } = this.state

		return (
			<a onClick={this.handleClick} className="order-link">
				{children}
				{order && showOrder
					? (
						<i
							className={'fa fa-long-arrow-' + (order === 'SORT_ASC' ? 'up' : 'down')}
							style={{ marginLeft: '5px' }}
						/>) : ''}
			</a>)
	}

}

OrderLink.propTypes = {
	onClick: PropTypes.func.isRequired,
	showOrder: PropTypes.bool,
	children: PropTypes.node
}

OrderLink.defaultProps = {
	showOrder: false
}

export default OrderLink
