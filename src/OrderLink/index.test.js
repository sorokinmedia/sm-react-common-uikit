import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import OrderLink from './index'

configure({ adapter: new Adapter() })
let spy

function setup(customProps, lifeCycle = false) {
	const props = {
		showOrder: true,
		onClick: jest.fn(),
		...customProps
	}
	const container = shallow(<OrderLink {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('OrderLink component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})

	it('should have a tag first with class order-link', () => {
		const { container } = setup()
		expect(container.first().props().className).toEqual('order-link')
		expect(container.first().type()).toEqual('a')
	})
	it('should have state order equals to null', () => {
		const { container } = setup()
		expect(container.state('order')).toEqual(null)
	})
	describe('after handleClick', () => {
		const { container } = setup({ onClick: jest.fn() })
		const instance = container.instance()
		const clickSpy = jest.spyOn(instance.props, 'onClick')
		spy = jest.spyOn(instance, 'handleClick')
		instance.forceUpdate()
		container.update()
		container.find('.order-link').simulate('click', {
			preventDefault() {
			}
		})
		it('should call handleClick', () => {
			expect(spy).toHaveBeenCalled()
		})

		it('should call onClick prop when called handleClick', () => {
			expect(clickSpy).toHaveBeenCalled()
		})
		it('should show i tag with class fa fa-long-arrow-down', () => {
			expect(container.find('.fa').hasClass('fa-long-arrow-down')).toEqual(true)
		})

	})

})
