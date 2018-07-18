import React from 'react';
import PropTypes from 'prop-types';

function PersonalTabPane(props) {
	const {
		tabClassPersonal, full_name, notification_email, notification_tel, tz, location, about
	} = props;
	return (
		<div className={`tab-pane ${tabClassPersonal}`}>
			<p className="top-margin">
				<a className="btn btn-flat btn-success" href="#">Изменить/Добавить</a>
			</p>
			<table className="table table-striped table-bordered detail-view">
				<tbody>
					<tr>
						<th>
							Полное имя
						</th>
						<td>
							{full_name}
						</td>
					</tr>
					<tr>
						<th>E-mail для уведомлений</th>
						<td>
							<a href={`mailto:${notification_email}`}>{notification_email}</a>
						</td>
					</tr>
					<tr>
						<th>
							Телефон для уведомлений
						</th>
						<td>
							{notification_tel}
						</td>
					</tr>
					<tr>
						<th>
							Часовой пояс
						</th>
						<td>
							{tz}
						</td>
					</tr>
					<tr>
						<th>
							Страна/Город
						</th>
						<td>
							{location}
						</td>
					</tr>
					<tr>
						<th>
							О себе
						</th>
						<td>
							{about}
						</td>
					</tr>
				</tbody>
			</table>
		</div>)
}

PersonalTabPane.propTypes = {
	tabClassPersonal: PropTypes.string.isRequired,
	full_name: PropTypes.string,
	notification_email: PropTypes.string,
	notification_tel: PropTypes.string,
	tz: PropTypes.any,
	location: PropTypes.string,
	about: PropTypes.string
};

export default PersonalTabPane;
