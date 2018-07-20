import React from 'react'
import PropTypes from 'prop-types'

function BoxBody(props) {

	const { body, link } = props

	return (
		<div className="box-body">
			<div>{body}</div>
			{link ?
				<p className="pull-right">
					<a href={link.url} className="">
						{link.text}
						<i className="fa fa-arrow-right" />
					</a>
				</p> : ''}
		</div>)
}

BoxBody.propTypes = {
	body: PropTypes.object.isRequired,
	link: PropTypes.object
}

export default BoxBody
