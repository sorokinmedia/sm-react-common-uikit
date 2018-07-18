import React from 'react'

export default (CustomComponent, defaultState) => class DecoratedComponent extends React.Component {
	state = {
		isOpen: defaultState
	}

	toggleOpen = (ev) => {
		if (ev) ev.preventDefault();
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		return <CustomComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} />
	}
}
