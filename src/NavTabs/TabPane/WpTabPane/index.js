import React from 'react';
import PropTypes from 'prop-types';

function WpTabPane(props) {
	const { wpUsername, tabClassWp, wpTabName } = props;
	return (
		<div className={`tab-pane ${tabClassWp}`}>
			<p>
				<a className="btn btn-flat btn-primary" href={`${wpUsername}`}>Сменить логин WP</a>
			</p>
			<table className="table table-striped table-bordered detail-view">
				<tbody>
					<tr>
						<th>{wpTabName}</th>
						<td>{wpUsername}</td>
					</tr>
				</tbody>
			</table>
		</div>)
}

WpTabPane.propTypes = {
	wpUsername: PropTypes.string,
	wpTabName: PropTypes.string,
	tabClassWp: PropTypes.string,
}

export default WpTabPane
