import React from 'react'
import PropTypes from 'prop-types';
import './style.css'

function TimeLineList(props) {

	const { map, showStartPoint, startPointClass } = props;

	return (
		<div className="">
			<ul className="front-timeline timeline">
				{map}
				{showStartPoint
					? (
						<li>
							<i className={startPointClass} />
						</li>) : ''}
			</ul>
		</div>)
}

TimeLineList.propTypes = {
	map: PropTypes.any.isRequired,
	showStartPoint: PropTypes.bool,
	startPointClass: PropTypes.string
};

TimeLineList.defaultProps = {
	startPointClass: 'fa fa-clock-o bg-gray'
};

export default TimeLineList
