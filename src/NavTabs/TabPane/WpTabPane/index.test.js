import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import WpTabPane from './index'

configure({ adapter: new Adapter() })
let spy

function setup(customProps, lifeCycle = false) {
	const props = {
		wpUsername: 'wp-user-name',
		tabClassWp: 'tab class wp',
		wpTabName: 'wp-tab-name',
		...customProps
	}
	const container = shallow(<WpTabPane {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('WpTabPane component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})

	it('should have specified first tag and class', () => {
		const { container } = setup()
		expect(container.first().type()).toEqual('div')
		expect(container.first().props().className).toEqual('tab-pane tab class wp')
	})
	it('should have specified href attribute', () => {
		const { container } = setup()
		expect(container.find('.tab-pane p a').props().href).toEqual('wp-user-name')
		expect(container.find('.tab-pane p a').text()).toEqual('Сменить логин WP')
	})

	it('should have table', () => {
		const { container } = setup()
		expect(container.find('table.table').exists()).toEqual(true)
		expect(container.find('table.table tbody').exists()).toEqual(true)
		expect(container.find('table.table tbody tr').exists()).toEqual(true)
		expect(container.find('table.table tbody tr th').text()).toEqual('wp-tab-name')
		expect(container.find('table.table tbody tr td').text()).toEqual('wp-user-name')
	})

})
