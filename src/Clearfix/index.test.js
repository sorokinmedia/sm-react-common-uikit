import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import ClearFix from './index'

configure({ adapter: new Adapter() })
let spy

function setup(customProps, lifeCycle = false) {
	const props = {
		...customProps
	}
	const container = shallow(<ClearFix {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('ClearFix component', () => {

	const { container } = setup()
	it('should render the component', () => {
		expect(container.exists()).toBe(true)
	})

	it('should have style clear both', () => {
		expect(container.first().props().style).toEqual({ clear: 'both' })
	})

})
