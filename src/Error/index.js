import PropTypes from 'prop-types'
import React from 'react'

function Index(props) {
	const { text, className } = props

	return (
		<div className={'alert alert-danger alert-dismissible ' + className}>
			<i className="icon fa fa-ban" />
			{text}
		</div>)
}

Index.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string
}
Index.defaultProps = {}

export default Index
