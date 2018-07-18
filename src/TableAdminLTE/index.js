import React from 'react'
import PropTypes from 'prop-types'

function TableAdminLte(props) {
	return (
		<table
			className={props.tableClassName}
			style={props.style ? props.style : {}}
		>
			<tbody>{props.children}</tbody>
		</table>
	)
}

TableAdminLte.propTypes = {
	tableClassName: PropTypes.string,
	style: PropTypes.object,
	children: PropTypes.node
};

TableAdminLte.defaultProps = {
	tableClassName: 'table table-striped table-bordered detail-view'
};

export default TableAdminLte
