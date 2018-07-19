import React from 'react'

export default (CustomComponent, defaultState) => class DecoratedComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: defaultState
		}
	}

	toggleOpen = (ev) => {
		if (ev) ev.preventDefault()
		this.setState(({ isOpen }) => ({
			isOpen: !isOpen
		}))
	}

	render() {
		return <CustomComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} />
	}
}
