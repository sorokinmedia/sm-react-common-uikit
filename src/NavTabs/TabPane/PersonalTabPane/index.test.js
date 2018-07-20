import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import PersonalTabPane from './index'

configure({ adapter: new Adapter() })
let spy

function setup(customProps, lifeCycle = false) {
	const props = {
		tabClassPersonal: 'personal',
		full_name: 'full name',
		notification_email: 'email',
		notification_tel: 'phone',
		tz: 'some',
		location: 'location',
		about: 'about',
		...customProps
	}
	const container = shallow(
		<PersonalTabPane {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('PersonalTabPane component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})

	it('should have specified first tag and class', () => {
		const { container } = setup()
		expect(container.first().type()).toEqual('div')
		expect(container.first().props().className).toEqual('tab-pane personal')
	})
	it('should have top-margin class', () => {
		const { container } = setup()
		expect(container.find('.tab-pane .top-margin').exists()).toEqual(true)
	})
	it('should have a tag with specified class', () => {
		const { container } = setup()
		expect(container.find('.tab-pane .top-margin a.btn.btn-flat.btn-success').exists()).toEqual(true)
		expect(container.find('.tab-pane .top-margin a.btn.btn-flat.btn-success').text()).toEqual('Изменить/Добавить')
	})
	it('should have table', () => {
		const { container } = setup()
		expect(container.find('table.table').exists()).toEqual(true)
		expect(container.find('table.table tbody').exists()).toEqual(true)
		expect(container.find('table.table tbody tr').first().exists()).toEqual(true)
		expect(container.find('table.table tbody tr').first().find('th').text()).toEqual('Полное имя')
		expect(container.find('table.table tbody tr td').first().find('td').text()).toEqual('full name')

		expect(container.find('table.table tbody tr').at(1).exists()).toEqual(true)
		expect(container.find('table.table tbody tr').at(1).find('th').text()).toEqual('E-mail для уведомлений')
		expect(container.find('table.table tbody tr td').at(1).find('td a').text()).toEqual('email')
		expect(container.find('table.table tbody tr td').at(1).find('td a').prop('href')).toEqual('mailto:email')

		expect(container.find('table.table tbody tr').at(2).exists()).toEqual(true)
		expect(container.find('table.table tbody tr').at(2).find('th').text()).toEqual('Телефон для уведомлений')
		expect(container.find('table.table tbody tr td').at(2).find('td').text()).toEqual('phone')

		expect(container.find('table.table tbody tr').at(3).exists()).toEqual(true)
		expect(container.find('table.table tbody tr').at(3).find('th').text()).toEqual('Часовой пояс')
		expect(container.find('table.table tbody tr td').at(3).find('td').text()).toEqual('some')

		expect(container.find('table.table tbody tr').at(4).exists()).toEqual(true)
		expect(container.find('table.table tbody tr').at(4).find('th').text()).toEqual('Страна/Город')
		expect(container.find('table.table tbody tr td').at(4).find('td').text()).toEqual('location')

		expect(container.find('table.table tbody tr').last().exists()).toEqual(true)
		expect(container.find('table.table tbody tr').last().find('th').text()).toEqual('О себе')
		expect(container.find('table.table tbody tr td').last().find('td').text()).toEqual('about')

	})

})
