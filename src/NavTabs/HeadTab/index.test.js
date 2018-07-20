import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import HeadTab from './index'

configure({ adapter: new Adapter() })
const spy = jest.fn()

function setup(customProps, lifeCycle = false) {
	const props = {
		tabClass: 'tab',
		isActive: true,
		handleTabClick: spy,
		tabName: 'tab name',
		aHref: 'http://domain.com',
		...customProps
	}
	const container = shallow(<HeadTab {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('HeadTab component', () => {

	const { container } = setup()
	it('should render the component', () => {
		expect(container.exists()).toBe(true)
	})

	it('should have li tag and specified class', () => {
		expect(container.first().type()).toEqual('li')
		expect(container.first().props().className).toEqual('tab active')
	})

	it('should have a tag', () => {
		expect(container.find('li a').exists()).toEqual(true)
		expect(container.find('li a').props().href).toEqual('http://domain.com')
		expect(container.find('li a').text()).toEqual('tab name')
	})

})
