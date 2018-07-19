import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { Box } from './index'

configure({ adapter: new Adapter() })
const spy = jest.fn()

function setup(customProps, lifeCycle = false) {
	const props = {
		isOpen: true,
		...customProps
	}
	const container = shallow(<Box {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('Box component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})

	it('should have specified class', () => {
		const { container } = setup({ boxClassName: 'boxClass' })
		expect(container.first().props().className).toEqual('simple-box box boxClass')
	})

	it('should have required className', () => {
		const { container } = setup({ boxBodyClassName: 'bbcn' })
		expect(container.find('.box-body').hasClass('is-open')).toEqual(true)
		expect(container.find('.box-body').hasClass('bbcn')).toEqual(true)
	})

	it('should call togglOpen', () => {
		const container = shallow(<Box
			toggleOpen={spy}
			canClosing
			boxHeaderContent={{ a: '' }}
		/>)
		container.find('.box-header').simulate('click')
		expect(spy).toHaveBeenCalled()
	})
})
