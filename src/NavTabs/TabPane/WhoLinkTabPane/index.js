import React from 'react';
import PropTypes from 'prop-types';

function WhoLinkTabPane(props) {
	const { who_user_id, who_api_key, tabClassLinks } = props;

	return (
		<div className={`tab-pane ${tabClassLinks}`}>
			<table className="table table-striped table-bordered detail-view">
				<tbody>
					<tr>
						<th>
							WHO user ID
						</th>
						<td>
							{who_user_id}
						</td>
					</tr>
					<tr>
						<th>
							WHO user API key
						</th>
						<td>
							{who_api_key}
						</td>
					</tr>
				</tbody>
			</table>
		</div>)
}

WhoLinkTabPane.propTypes = {
	who_user_id: PropTypes.number,
	who_api_key: PropTypes.string,
	tabClassLinks: PropTypes.string.isRequired
};

export default WhoLinkTabPane;
