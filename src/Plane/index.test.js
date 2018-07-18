import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Plane from './index'

configure({ adapter: new Adapter() })
let spy

function setup(customProps, lifeCycle = false) {
	const props = {
		header: 'header',
		className: 'some class',
		...customProps
	}
	const container = shallow(<Plane {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('Plane component', () => {
	const { container } = setup()

	it('should render the component', () => {
		expect(container.exists()).toBe(true)
	})

	it('should have specified class', () => {
		expect(container.first().props().className).toEqual('box box-solid')
		expect(container.find('.box-body').hasClass('some class')).toEqual(true)
	})
	it('should show specified text', () => {
		expect(container.find('.box-header').text()).toEqual('header')
	})
})
