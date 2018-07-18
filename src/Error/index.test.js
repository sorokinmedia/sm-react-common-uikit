import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Error from './index'

configure({ adapter: new Adapter() })
let spy

function setup(customProps, lifeCycle = false) {
	const props = {
		...customProps
	}
	const container = shallow(<Error {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('Error component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})

	it('should ', () => {

	})

	it('should have specified class', () => {
		const { container } = setup({ className: 'random' })
		expect(container.first().props().className).toEqual('alert alert-danger alert-dismissible random')
	})

	it('should have i tag inside with specified class', () => {
		const { container } = setup()
		expect(container.find('.alert i.icon.fa.fa-ban').exists()).toEqual(true)
	})

	it('should have text inside', () => {
		const { container } = setup({ text: 'some text' })
		expect(container.find('.alert').text()).toEqual('some text')
	})

})
