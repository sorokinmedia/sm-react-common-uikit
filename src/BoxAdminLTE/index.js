import PropTypes from 'prop-types';
import React, { Component } from 'react'
import BoxBody from './BoxBody/index';
import BoxHeader from './BoxHeader/index';
import './style.css';

class BoxAdminLTE extends Component {

	static propTypes = {
		title: PropTypes.string,
		handleBoxTuggle: PropTypes.func,
		header: PropTypes.object,
		body: PropTypes.object,
		sign: PropTypes.string,
		pullRight: PropTypes.object,
		link: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.object
		]),
		onToggle: PropTypes.func,
		className: PropTypes.string,
		isCollapsed: PropTypes.bool
	};

	constructor(props) {
		super(props);

		this.state = {
			callapsed: props.isCollapsed
		}
	}

	handleBoxTuggle = () => {
		this.setState({ callapsed: !this.state.callapsed });

		const { onToggle } = this.props;
		if (onToggle) onToggle(!this.state.callapsed)
	}

	render() {
		const { title, body, link, className, pullRight, header } = this.props;
		const callapsed = this.state.callapsed ? 'collapsed-box' : '';
		const sign = callapsed ? 'plus' : 'minus';
		const wrapClassName = className ? className : '';

		return (
			<div className={'box-admin-lte box box-solid ' + wrapClassName + ' ' + callapsed}>
				<BoxHeader
					title={title}
					handleBoxTuggle={this.handleBoxTuggle}
					sign={sign}
					pullRight={pullRight}
					header={header}
				/>
				<BoxBody body={body} link={link} />
			</div>)
	}
}

export default BoxAdminLTE
