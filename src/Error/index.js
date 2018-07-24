import PropTypes from 'prop-types'
import React from 'react'

function Error(props) {
	const { text, className } = props

	return (
		<div className={'alert alert-danger alert-dismissible ' + className}>
			<i className="icon fa fa-ban" />
			{text}
		</div>)
}

Error.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string
}
Error.defaultProps = {}

export default Error
