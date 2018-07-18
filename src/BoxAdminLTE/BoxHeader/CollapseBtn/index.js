import React from 'react'
import PropTypes from 'prop-types'

function CollapseBtn(props) {

	const { sign } = props

	return (
		<button
			id="btn-collapse-sign"
			type="button"
			className="btn btn-box-tool"
			data-widget="collapse"
		>
			<i className={'fa fa-' + sign} />
		</button>)
}

CollapseBtn.propTypes = {
	sign: PropTypes.string.isRequired
}

export default CollapseBtn
