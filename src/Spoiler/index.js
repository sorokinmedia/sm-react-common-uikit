import React, { Component } from 'react'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import { scrollToById } from '../NavTabs/scrollToByName'

export class Spoiler extends Component {

	componentDidMount() {
		if (this.props.forceOpen) this.props.toggleOpen()
	}

	handleToggle = () => {
		const { onToggle } = this.props
		if (onToggle) onToggle(this.props.isOpen)
		this.props.toggleOpen()
		if (this.props.focus) {
			setTimeout(() => {
				scrollToById(this.props.focus)
			}, 200)
		}
	}

	render() {
		const { isOpen, tag, head, children } = this.props
		const hovered = React.createElement(
			tag,
			{ onClick: this.handleToggle, className: 'hovered' },
			[head, ' ', <i key={Date.now()} className={`fa fa-angle-${isOpen ? 'up' : 'down'}`} />]
		)
		return (
			<div>
				{hovered}
				{isOpen ? children : ''}
			</div>)
	}
}

Spoiler.propTypes = {
	head: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
		PropTypes.number
	]),
	tag: PropTypes.string,
	focus: PropTypes.string,
	onToggle: PropTypes.func,
	toggleOpen: PropTypes.func,
	children: PropTypes.node,
	isOpen: PropTypes.bool,
	forceOpen: PropTypes.bool
}

Spoiler.defaultProps = {
	tag: 'div'
}

export default toggleOpen(Spoiler)
