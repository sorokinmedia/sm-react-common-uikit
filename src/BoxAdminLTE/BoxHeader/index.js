import React from 'react'
import PropTypes from 'prop-types'
import CollapseBtn from './CollapseBtn/index';

function BoxHeader(props) {

	const { title, pullRight, sign, handleBoxTuggle, header } = props

	return (
		<div className="box-header with-border" onClick={handleBoxTuggle}>
			<h3 className="box-title pull-left">{title}</h3>
			{header ? header : ''}
			<div className="box-tools pull-right">
				<div className="">
					{pullRight ? pullRight : ''}
					<span className="btn-collapse-sign-wrapper">
						<CollapseBtn sign={sign} />
					</span>
				</div>
			</div>
		</div>)
}

BoxHeader.propTypes = {
	title: PropTypes.string.isRequired,
	handleBoxTuggle: PropTypes.func.isRequired,
	sign: PropTypes.string.isRequired,
	header: PropTypes.object,
	pullRight: PropTypes.object,
};

export default BoxHeader
