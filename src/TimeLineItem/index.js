import React from 'react'
import PropTypes from 'prop-types'

function TimeLineItem(props) {

	const { itemButton, leftIconClass, itemHeader, data, wrapClassName, leftIconContent } = props;
	const { message, created_at } = data ? data : {};
	return (
		<li className={wrapClassName}>
			<i className={leftIconClass}>{leftIconContent}</i>
			<div className="timeline-item">
				{created_at
					? <span className="time"><i className="fa fa-clock-o" />{created_at}</span>
					: ''}
				<h3 className="timeline-header">
					{itemHeader}
				</h3>
				{message
					? (
						<div className="timeline-body">
							{message}
						</div>)
					: ''}
				{itemButton
					? (
						<div className="timeline-footer">
							{itemButton}
						</div>)
					: ''}
			</div>
		</li>)
}


TimeLineItem.propTypes = {
	data: PropTypes.shape({
		user: PropTypes.shape({
			username: PropTypes.string.isRequired,
			id: PropTypes.number
		}),
		message: PropTypes.object,
		itemButton: PropTypes.object,
		created_at: PropTypes.string
	}),
	itemHeader: PropTypes.any,
	leftIconClass: PropTypes.string,
	wrapClassName: PropTypes.string,
	leftIconContent: PropTypes.number,
	itemButton: PropTypes.string
};

TimeLineItem.defautProps = {
	wrapClassName: ''
};

export default TimeLineItem
