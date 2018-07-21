import PropTypes from 'prop-types';
import React, { Component } from 'react'
import BoxBody from './BoxBody/index';
import BoxHeader from './BoxHeader/index';
import './style.css';

class BoxAdminLTE extends Component {

	static propTypes = {
		title: PropTypes.string,
		handleBoxToggle: PropTypes.func,
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
			collapsed: props.isCollapsed
		}
	}

	handleBoxToggle = () => {
		this.setState({ collapsed: !this.state.collapsed });

		const { onToggle } = this.props;
		if (onToggle) onToggle(!this.state.collapsed)
	}

	render() {
		const { title, body, link, className, pullRight, header } = this.props;
		const collapsed = this.state.collapsed ? 'collapsed-box' : '';
		const sign = collapsed ? 'plus' : 'minus';
		const wrapClassName = className ? className : '';

		return (
			<div className={'box-admin-lte box box-solid ' + wrapClassName + ' ' + collapsed}>
				<BoxHeader
					title={title}
					handleBoxToggle={this.handleBoxToggle}
					sign={sign}
					pullRight={pullRight}
					header={header}
				/>
				<BoxBody body={body} link={link} />
			</div>)
	}
}

export default BoxAdminLTE
