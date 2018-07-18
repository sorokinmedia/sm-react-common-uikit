import PropTypes from 'prop-types'
import React from 'react'

export default function Plane(props) {
	return (
		<div className="box box-solid">
			{props.header
				? <div className="box-header">{props.header}</div> : ''}
			<div className={`box-body ${props.className}`}>{props.children}</div>
		</div>)
}

Plane.propTypes = {
	header: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
		PropTypes.array
	]),
	className: PropTypes.string,
	children: PropTypes.node,
};

Plane.defaultProps = {
	className: ''
};

