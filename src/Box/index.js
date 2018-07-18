import React from 'react'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen';

function Box(props) {
	const isOpenClass = props.isOpen ? 'is-open' : 'closed';
	return (
		<div className={'simple-box box ' + props.boxClassName}>
			{props.boxHeaderContent
				? (
					<div
						className="box-header"
						onClick={props.canClosing
							? props.toggleOpen : () => {
							}}
					>
						{props.boxHeaderContent}
					</div>)
				: ''}
			<div className={'box-body ' + isOpenClass + ' ' + props.boxBodyClassName}>
				{props.children}
			</div>
		</div>)
}

Box.propTypes = {
	isOpen: PropTypes.bool,
	boxClassName: PropTypes.string,
	boxBodyClassName: PropTypes.string,
	boxHeaderContent: PropTypes.object,
	canClosing: PropTypes.bool,
	toggleOpen: PropTypes.any,
	children: PropTypes.node
};

Box.defaultProps = {
	canClosing: false
};

export default toggleOpen(Box, true)
