import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import TableAdminLTE from './index'

configure({ adapter: new Adapter() })
let spy

function setup(customProps, lifeCycle = false) {
	const props = {
		tableClassName: 'table class',
		style: {
			color: 'red'
		},
		...customProps
	}
	const container = shallow(<TableAdminLTE {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('TableAdminLTE component', () => {

	const { container } = setup()
	it('should render the component', () => {
		expect(container.exists()).toBe(true)
	})

	it('should have table tag first', () => {
		expect(container.first().type()).toEqual('table')
	})

	it('should have table tag first', () => {
		expect(container.first().props().className).toEqual('table class')
	})

	it('should have style prop', () => {
		expect(container.first().props().style).toEqual({
			color: 'red'
		})
	})

	it('should have tbody inside table', () => {
		expect(container.find('table tbody').exists()).toBe(true)
	})

})
