import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Input extends Component {

	static propTypes = {
		onChange: PropTypes.func.isRequired,
		inputProps: PropTypes.object,
		value: PropTypes.string
	}

	static getDerivedStateFromProps({ value }, prevState) {
		if (value !== prevState.value && value != null) {
			return { value: prevState.value }
		}
		return null
	}

	constructor(props) {
		super(props)
		this.state = { value: '' }
	}

	componentDidMount() {
		if (this.props.value != null) {
			// eslint-disable-next-line react/no-did-mount-set-state
			this.setState({ value: this.props.value })
		}
	}

	// componentWillReceiveProps(props) {
	// 	if (props.value !== this.state.value && props.value != null) {
	// 		this.setState({ value: props.value });
	// 	}
	// }

	onBlur = (event) => {
		const { inputProps = {} } = this.props
		const { onBlur } = inputProps

		if (onBlur) onBlur()

		const currentValue = this.state.value
		if (currentValue !== this.props.value) {
			this.props.onChange(this.state.value)
		}
	}

	onKeyDown = (event) => {
		this.setState({ value: event.nativeEvent.target.value })
	}

	render() {
		const { value } = this.state
		const { inputProps = {} } = this.props
		const { onBlur, ...restProps } = inputProps

		return (
			<div>
				<form onSubmit={this.onBlur}>
					<input
						value={value}
						onBlur={this.onBlur}
						onChange={this.onKeyDown}
						{...restProps}
						className="form-control"
					/>
				</form>
			</div>)
	}
}
