import React from 'react';
import PropTypes from 'prop-types';

function TabPane(props) {
	const { content } = props;
	return <div className="tab-content">{content}</div>
}

TabPane.propTypes = {
	content: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object
	])
};

export default TabPane;
