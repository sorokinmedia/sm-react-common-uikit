import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import BoxAdminLTE from '../BoxAdminLTE'
import { Spoiler } from './index'

configure({ adapter: new Adapter() })
let spy

function setup(customProps, lifeCycle = false) {
	const props = {
		isOpen: true,
		toggleOpen: jest.fn(),
		...customProps
	}
	const container = shallow(<Spoiler {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('Spoiler component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})

	it('should render the component', () => {
		const { container } = setup()
		expect(container.find('div .hovered i.fa').hasClass('fa-angle-up')).toBe(true)
	})

	it('should call handleToggle', () => {
		const { container } = setup()
		const instance = container.instance()
		spy = jest.spyOn(instance, 'handleToggle')
		container.instance().forceUpdate()
		container.update()
		container.find('.hovered').simulate('click')
		expect(spy).toHaveBeenCalled()
	})
	it('should componentDidMount called', () => {
		jest.spyOn(Spoiler.prototype, 'componentDidMount')
		shallow(<Spoiler />)
		expect(Spoiler.prototype.componentDidMount).toHaveBeenCalled()
		Spoiler.prototype.componentDidMount.mockClear()
	})

	it('should toggleOpen called', () => {
		shallow(<BoxAdminLTE toggleOpen={spy} isOpen forceOpen />)
		expect(spy).toHaveBeenCalled()
	})
})
