import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import WhoLinkTabPane from './index'

configure({ adapter: new Adapter() })
let spy

function setup(customProps, lifeCycle = false) {
	const props = {
		who_user_id: 1,
		who_api_key: 'api',
		tabClassLinks: 'class-link',
		...customProps
	}
	const container = shallow(<WhoLinkTabPane {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('WhoLinkTabPane component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})

	it('should have specified first tag and class', () => {
		const { container } = setup()
		expect(container.first().type()).toEqual('div')
		expect(container.first().props().className).toEqual('tab-pane class-link')
	})

	it('should have table', () => {
		const { container } = setup()
		expect(container.find('.tab-pane table.table').exists()).toEqual(true)
		expect(container.find('.tab-pane table.table tbody').exists()).toEqual(true)
		expect(container.find('.tab-pane table.table tbody tr').first().exists()).toEqual(true)
		expect(container.find('.tab-pane table.table tbody tr').first().find('th').exists()).toEqual(true)
		expect(container.find('.tab-pane table.table tbody tr').first().find('th').text()).toEqual('WHO user ID')
		expect(container.find('.tab-pane table.table tbody tr').first().find('td').exists()).toEqual(true)
		expect(container.find('.tab-pane table.table tbody tr').first().find('td').text()).toEqual('1')

		expect(container.find('.tab-pane table.table tbody tr').last().exists()).toEqual(true)
		expect(container.find('.tab-pane table.table tbody tr').last().find('th').exists()).toEqual(true)
		expect(container.find('.tab-pane table.table tbody tr').last().find('th').text()).toEqual('WHO user API key')
		expect(container.find('.tab-pane table.table tbody tr').last().find('td').exists()).toEqual(true)
		expect(container.find('.tab-pane table.table tbody tr').last().find('td').text()).toEqual('api')

	})
})
