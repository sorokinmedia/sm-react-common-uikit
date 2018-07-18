import PropTypes from 'prop-types'
import React from 'react'

function List(props) {
	return (
		<ul className={props.className} style={props.styles}>
			{props.items.map(elem => (
				<li style={props.liStyles} key={elem.id}>
					{props.itemFunc(elem)}
				</li>))}
		</ul>)
}

List.propTypes = {
	items: PropTypes.array.isRequired,
	itemFunc: PropTypes.func.isRequired,
	className: PropTypes.string,
	ulStyles: PropTypes.object,
	styles: PropTypes.object,
	liStyles: PropTypes.object
}

export default List
