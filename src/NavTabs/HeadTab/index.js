import React from 'react';
import PropTypes from 'prop-types';

function HeadTab(props) {
	return (
		<li
			className={props.tabClass + (props.isActive
				? ' active'
				: '')}
			/* onClick={props.handleTabClick} */
		>
			<a href={props.aHref}>{props.tabName}</a>
		</li>)
}

HeadTab.propTypes = {
	aHref: PropTypes.string,
	tabName: PropTypes.string.isRequired,
	handleTabClick: PropTypes.func.isRequired,
	tabClass: PropTypes.string,
	isActive: PropTypes.bool
};

export default HeadTab;
