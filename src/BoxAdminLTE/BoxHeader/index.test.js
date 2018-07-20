import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import BoxHeader from './index'

configure({ adapter: new Adapter() })
const spy = jest.fn()

function setup(customProps, lifeCycle = false) {
	const props = {
		title: 'title',
		sign: 'sign',
		handleBoxTuggle: spy,
		...customProps
	}
	const container = shallow(<BoxHeader {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('BoxHeader component', () => {

	const { container } = setup()
	it('should render the component', () => {
		expect(container.exists()).toBe(true)
	})

	it('should have specified first tag and class', () => {
		expect(container.first().type()).toEqual('div')
		expect(container.first().props().className).toEqual('box-header with-border')
		expect(container.first().props().onClick).toEqual(spy)
	})

	it('should have span with CollapseBtn within', () => {
		expect(container.find('span.btn-collapse-sign-wrapper CollapseBtn').exists()).toEqual(true)
		expect(container.find('span.btn-collapse-sign-wrapper CollapseBtn').prop('sign')).toEqual('sign')
	})

})
